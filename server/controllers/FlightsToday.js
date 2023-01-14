const flight = require("../models/flightModel");

const getFlightsToday = async (req, res) => {
    const{seat_type,passengers} = req.query;
    console.log(seat_type,passengers);
    let flights = await flight.getTodayFlights(seat_type,passengers);
    console.log(flights);
    res.json({status:1,flightsToday:flights});
}

module.exports = getFlightsToday;