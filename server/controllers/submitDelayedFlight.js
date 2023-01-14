const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const delayedFlightHandle = async(req,res) => {
    const fdets = await flight.getFlightDetailsByID(req.body.f_id);
    if (!fdets || fdets.length == 0){
        res.json({status:0});
    }
    const resp = await flight.updateDelayedFlight(req.body.f_id,req.body.dept_time,req.body.arr_time);
    res.json({status:1});
}



module.exports = delayedFlightHandle;