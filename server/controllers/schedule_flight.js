const db = require("../routes/db-config");
const admin = require("../models/adminModel");

const Schedule_Flight = async (req,res) => {
    const[start_dest,end_dest,aircraft_ID,departure_time,arrival_time,cost] = req.body;

    await admin.ScheduleFlight(aircraft_ID,start_dest,end_dest,departure_time,arrival_time,cost);

    console.log("OKKK")

    return res.json({stats:1,message:"Flight has been scheduled successfully"});

}

module.exports = Schedule_Flight;