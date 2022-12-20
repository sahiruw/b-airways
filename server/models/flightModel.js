const db = require("../routes/db-config");
const userModel = require("./userModel");

class flightModel{

    static async showFlightTable(){
        let flightdata = await new Promise((resolve,reject) => {
            const sqlStatement = "SELECT * FROM flights;";
            db.query(sqlStatement,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return flightdata;
    }

    static async searchFlightbyLocation(from,to){
        let data = await new Promise((resolve,reject) => {
            const getFlighbyLoc = `SELECT * FROM flights WHERE from = '${from}' AND to = '${to}';`
            db.query(getFlighbyLoc,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        return data;
    }









}

module.exports = flightModel;