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

    static async searchFlightbyLocation(from,to){
        let data = await new Promise((resolve,reject) => {
            const getFlighbyLoc = `SELECT * FROM flight WHERE from = '${from}' AND to = '${to}';`
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

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









}

module.exports = flightModel;