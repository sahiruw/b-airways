const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const Departure = async (req,res) => {

    const flightData = await flight.getAirportLocations();
    if (flightData == null) return res.json({ status: 0 });
  else {
    return res.json({ status: 1, data:flightData});
  }

}

module.exports = Departure;