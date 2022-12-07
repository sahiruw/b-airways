const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const show = async(req,res) => {

    const flightData = await flight.showFlightTable();
    res.json({data:flightData});

}



module.exports = show;