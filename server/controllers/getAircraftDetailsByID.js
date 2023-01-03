const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const getAircraftDetails = async(req,res) => {
    const flightData = await flight.getAircraftDetailsByFlightID(req.query.aircraftID);
    res.json({status:1, data:flightData[0]});

}



module.exports = getAircraftDetails;