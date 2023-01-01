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
        console.log(flight_class);
        let data = await new Promise((resolve,reject) => {

            var getFlighbyLoc = "";
            
            if (flight_class == "Platinum") {
                getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_platinum_seats2(ID) >= ${passengers};`
            }
            else if(flight_class == "Bussiness"){
                getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_bussiness_seats2(ID) >= ${passengers};`
            }
            else{
                getFlighbyLoc = `SELECT DISTINCT ID,start_destination,end_destination,departure_time,arrival_time
                FROM flight_details4
                WHERE start_destination = '${from}' AND end_destination = '${to}' AND departure_time >= '${departure_date}' AND num_remaining_economy_seats2(ID) >= ${passengers};`
            }
            
            console.log(getFlighbyLoc);
            
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


    static async getAircraftDetailsByID(id){
        let data = await new Promise((resolve,reject) => {
            const getFlighbyLoc = `SELECT * FROM aircraft a join aircraft_type att on a.type_ID = att.ID  where a.id=${id};`
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }

    static async getRecentFlights(){
        let data = await new Promise((resolve,reject) => {
            const getFlighbyLoc = `SELECT * FROM flight ORDER BY ID DESC LIMIT 5;`
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })
        return data;
    }







}

module.exports = flightModel;