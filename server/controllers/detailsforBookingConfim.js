const flight = require("../models/flightModel");


const detailsforBookingConfim = async(req,res) => {

    const getAirportDetails = await flight.getAirportLocations();
    const flightDetails = await flight.getFlightDetailsByID(req.body.flightID);
    let airportDetails = {}
    for (let airport of getAirportDetails) {airportDetails[airport.code] = airport.name}
    let from = airportDetails[flightDetails.start_destination]
    let to = airportDetails[flightDetails.end_destination]

    let flightData = {
        details: flightDetails,
        from: from,
        to: to
    }

    let userData = req.body.userData;

    res.json({status:1, flightdata:flightData});
}


module.exports = detailsforBookingConfim;