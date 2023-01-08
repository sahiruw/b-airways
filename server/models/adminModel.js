
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
        //console.log(aircraft_id,start_destination,end_destination,departure_time,arrival_time,cost);
        let data = await new Promise((resolve,reject) => {
            const scheduling_query = `select ScheduleFlight2(${aircraft_id},'${start_destination}','${end_destination}','${departure_time}','${arrival_time}',${cost});`;
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

    static async getStaff(){
        let data = await new Promise((resolve,reject) => {
            const getStaff_query = `SELECT * FROM staff`;
            db.query(getStaff_query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        return data;
    }

    static async Action1(end_des,time_from,time_to){
        let data = await new Promise((resolve,reject)=>{
            const action1_query = `select COUNT(*) as number_of_passengers from action1 where end_destination = '${end_des}' and '${time_from}' <= departure_time <= '${time_to}'`;
            db.query(action1_query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        return data;
        
    }

    static async Members_Below_18(restricted_date){

        let data = await new Promise((resolve,reject) => {
            const query = `select passenger_ID,flight_ID,ID,firstname,lastname from flight_member_details where dob >= '${restricted_date}'  and flight_status = 'Scheduled' order by departure_time limit 1`;
            db.query(query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        return data

    }

    static async Members_Above_18(restricted_date){

        let data = await new Promise((resolve,reject) => {
            const query = `select passenger_ID,flight_ID,ID,firstname,lastname from flight_member_details where dob <= '${restricted_date}'  and flight_status = 'Scheduled' order by departure_time limit 1`;
            db.query(query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })
        })

        return data

    }

    static async Bookings_by_Passenger_type(){
        
        let data = await new Promise((resolve,reject) => {
            const query = `select seat_type,sum(seat_count) as bookings from booking group by seat_type;`;
            db.query(query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })

            
        })

        return data;
    }

    static async Past_Fligts(start_des,end_des){
        let data = await new Promise((resolve,reject) => {
            const query = `select aircraft_name,flight_ID,flight_status,count(passenger_ID) as passenger_count from past_flights where start_destination = '${start_des}' and end_destination = '${end_des}' group by flight_ID;`
            db.query(query,(err,result) => {
                if(err) reject(err)
                else resolve(result)
            })})
        return data;
    }

    
    

}

module.exports = AdminModel;