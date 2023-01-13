const flight = require("../models/flightModel");

const detailsforBookingConfim = async (req, res) => {
  if (!req.body.flightID) {
    res.json({ status: 0 });
    return;
  }

  const getAirportDetails = await flight.getAirportLocations();

  const flightDetails = await flight.getFlightDetailsByID(req.body.flightID);
  let aircraftDetails = await flight.getAircraftDetailsByFlightID(req.body.flightID);
  aircraftDetails = aircraftDetails[0]
  console.log(aircraftDetails)
  if (!aircraftDetails) {
    res.json({ status: 0 });
    return;
  }

  let airportDetails = {};
  for (let airport of getAirportDetails) {
    airportDetails[airport.code] = [airport.airport_name, airport.city];
  }
  let from = airportDetails[flightDetails.start_destination]
  let to = airportDetails[flightDetails.end_destination];
  let flightData = {
    details: flightDetails,
    from: from,
    to: to,
    aircraftDetails: {name: aircraftDetails.aircraft_name, type: aircraftDetails.aircraft_type}
  };

  let userData = req.body.userData;

  res.json({ status: 1, flightdata: flightData });
};

module.exports = detailsforBookingConfim;
