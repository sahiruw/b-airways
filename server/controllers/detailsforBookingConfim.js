const flight = require("../models/flightModel");


const detailsforBookingConfim = async(req,res) => {

    const getAirportDetails = await flight.getAirportLocations();
    const flightDetails = await flight.getFlightDetailsByID(req.body.flightID);
    let airportDetails = {}
    for (let airport of getAirportDetails) {airportDetails[airport.code] = airport.name}
    let from = airportDetails[flightDetails.start_destination]
    let to = airportDetails[flightDetails.end_destination]


    let userData = req.body.userData;
    console.log(userData);
    // res.json({status:1, data:ids});
}


module.exports = detailsforBookingConfim;