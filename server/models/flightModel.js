const db = require("../routes/db-config");
const userModel = require("./userModel");

class flightModel{

    static async showFlightTable(){
        let flightdata = await new Promise((resolve,reject) => {
            const sqlStatement = "SELECT * FROM flight;";
            db.query(sqlStatement,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return flightdata;
    }

    static async searchFlightbyLocation(from,to,flight_class,passengers,departure_date){
        let data = await new Promise((resolve,reject) => {

            var getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_seats9(ID,'${flight_class}') >= ${passengers} AND flight_status = "Scheduled";`

            
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        });

        return data;
    }

    static async getAirportLocations(){
        let data = await new Promise((resolve,reject) => {
            const getAirportLoc = "SELECT distinct code, a.name as airport_name, l.name as city FROM airport a join location l on a.location_id=l.location_id ORDER BY code ASC;";
            db.query(getAirportLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }


    static async getAircraftDetailsByFlightID(id){
        let data = await new Promise((resolve,reject) => {
            const getFlighbyLoc = `SELECT a.name as 'aircraft_name', att.name as 'aircraft_type', a.*,att.*,f.* FROM aircraft a join aircraft_type att on a.type_ID = att.ID join flight f on f.aircraft_ID=a.id where f.id=${id};`
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }

    // 
    
    static async getReservedSeatsByID(flightID){
        let data = await new Promise((resolve,reject) => {
            const getReservedSeats = `SELECT seat_no FROM booking b join passenger p on b.id=p.booking_ID WHERE flight_ID = ${flightID} and (booking_status="Booked" or booking_status="Completed" );`
            db.query(getReservedSeats,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data;
    }

    static async getRecentFlights(){
        let data = await new Promise((resolve,reject) => {
            const getRecentFlights = `select fa.ID,start_destination,end_destination,departure_time,arrival_time,aircraft_name from flights_and_aircrafts fa inner join paths p on p.ID = fa.path_ID where status = "Scheduled" order by departure_time asc limit 6;`
            db.query(getRecentFlights,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data;

        
    }


    static async getFlightDetailsByID(flightID){
        let data = await new Promise((resolve,reject) => {
            const flightDetails = `SELECT * FROM flight f JOIN paths p ON f.path_id=p.id where f.ID=${flightID};`
            db.query(flightDetails,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data[0];
    }

    static async getAirportDetails(airportCode){
        let data = await new Promise((resolve,reject) => {
            const getAdetails = `SELECT * FROM airport where code="${airportCode}";`
            db.query(getAdetails,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data[0];
    }

    static async getTodayFlights(seat_type,passengers){
        let data = await new Promise((resolve,reject) => {
            const getTodayFlightdetails = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
            FROM flight_details4
            WHERE  departure_time BETWEEN DATE_ADD(DATE_FORMAT(NOW(), '%Y-%m-%d'), INTERVAL 0 DAY) AND DATE_ADD(DATE_FORMAT(NOW(), '%Y-%m-%d'), INTERVAL 1 DAY) AND num_remaining_seats9(ID,'${seat_type}') >= ${passengers} AND flight_status = "Scheduled";`
            db.query(getTodayFlightdetails,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }

    static async updateDelayedFlight(flightId, d_time, a_time){
        let data = await new Promise((resolve,reject) => {
            const getTodayFlightdetails = `UPDATE flight SET departure_time = '${d_time}', arrival_time = '${a_time}' WHERE ID = '${flightId}';`
            db.query(getTodayFlightdetails,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }
}

module.exports = flightModel;