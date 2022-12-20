const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const search = async (req,res) => {

    const flighData = await flight.searchFlightbyLocation();

}