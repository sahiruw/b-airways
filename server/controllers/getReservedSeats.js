const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const flight = require("../models/flightModel");


const getReservedSeats = async(req,res) => {
    const reservedSeats = await flight.getReservedSeatsByID(req.query.flightID);
    let ids = [];
    for (let id of reservedSeats){ids.push(id.seat_no)}
    res.json({status:1, data:ids});
}



module.exports = getReservedSeats;