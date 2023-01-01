const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const Search = async (req,res) => {

    const {from,to,departureDate,seat_type,passengers} = req.query;

    const FlightDetails = flight.searchFlightbyLocation(from,to,seat_type,passengers,departureDate);

    console.log(FlightDetails);

    return res.json({status:1,data:FlightDetails});

}

module.exports = Search;