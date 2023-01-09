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

            var getFlighbyLoc = "";
            
            if (flight_class == "Platinum") {
                getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_platinum_seats2(ID) >= ${passengers} AND flight_status = "Scheduled";`
            }
            else if(flight_class == "Bussiness"){
                getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_bussiness_seats2(ID) >= ${passengers} AND flight_status = "Scheduled";`
            }
            else{
                getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_economy_seats2(ID) >= ${passengers} AND flight_status = "Scheduled";`
            }
            
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        });

        return data;
    }

    static async getAirportLocations(){
        let data = await new Promise((resolve,reject) => {
            const getAirportLoc = "SELECT DISTINCT * FROM airport ORDER BY code ASC;";
            db.query(getAirportLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }


    static async getAircraftDetailsByFlightID(id){
        let data = await new Promise((resolve,reject) => {
            const getFlighbyLoc = `SELECT * FROM aircraft a join aircraft_type att on a.type_ID = att.ID join flight f on f.aircraft_ID=a.id where f.id=${id};`
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
            const getReservedSeats = `SELECT seat_no FROM booking b join passenger p on b.id=p.booking_ID WHERE flight_ID = ${flightID};`
            db.query(getReservedSeats,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data;
    }

    static async getRecentFlights(){
        let data = await new Promise((resolve,reject) => {
            const getRecentFlights = `select fa.ID,start_destination,end_destination,departure_time,arrival_time,aircraft_name from flights_and_aircrafts fa inner join paths p on p.ID = fa.path_ID where status = "Scheduled" order by departure_time asc limit 4;`
            db.query(getRecentFlights,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data;
    }





}

module.exports = flightModel;