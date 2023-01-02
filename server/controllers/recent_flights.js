const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");

const RecentFlights = async (req, res) =>{
    const recentFlights = await flight.getRecentFlights();
    return res.json({status : 1, data : recentFlights});

}

module.exports = RecentFlights;