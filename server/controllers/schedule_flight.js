const db = require("../routes/db-config");
const admin = require("../models/adminModel");

const Schedule_Flight = async (req,res) => {
    const{start_destination,
        end_destination,
        aircraft_id,
        departure_date_time,
        arrival_date_time,
        cost} = req.body;
    console.log(start_destination,end_destination,aircraft_id,departure_date_time,arrival_date_time,cost);

    let data = await admin.ScheduleFlight(aircraft_id,start_destination,end_destination,departure_date_time,arrival_date_time,cost);

    

    return res.json({stats:1,message:"Flight has been scheduled successfully"});

}

module.exports = Schedule_Flight;