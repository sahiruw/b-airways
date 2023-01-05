
const { end } = require("../routes/db-config");
const db = require("../routes/db-config");

class AdminModel{

    static async checkAdmin(username, password){
        let data = await new Promise((resolve,reject) => {
            const sqlQuery = "";
            db.query(sqlQuery,(err,ressult) => {
                if(err) reject(err)
                else resolve(ressult)
            })
        })

        return data;
    }

    static async ScheduleFlight(aircraft_id,start_destination,end_destination,departure_time,arrival_time,cost){
        let data = await new Promise((resolve,reject) => {
            const scheduling_query = `select ScheduleFlight2('${aircraft_id}','${start_destination}','${end_destination}','${departure_time}','${arrival_time}',${cost});`;
            db.query(scheduling_query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        return data;
    }

    static async SetFlyingStaff(flight_id,staff_member_name){
        let data = await new Promise((resolve,reject) => {
            const setFlying_staff_query = `SELECT SetFlyingStaff(${flight_id},'${staff_member_name}')`;
            db.query(setFlying_staff_query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        return data;
    }

}

module.exports = AdminModel;