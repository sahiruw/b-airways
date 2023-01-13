const flight = require("../models/flightModel");
const user = require("../models/userModel");
const detailsforBookingConfim = async (req, res) => {
  if (!req.body.flightID) {
    res.json({ status: 0 });
    return;
  }

  const getAirportDetails = await flight.getAirportLocations();

  const flightDetails = await flight.getFlightDetailsByID(req.body.flightID);
  let aircraftDetails = await flight.getAircraftDetailsByFlightID(req.body.flightID);
  aircraftDetails = aircraftDetails[0]

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

  let loggedUserDetails = req.body.loggedUserDetails;
  let discount = 0;
  if (loggedUserDetails[1]) {
    let loggedUserData = await user.getUserbyUsername(loggedUserDetails[0]);
    let memCategory = loggedUserData[0].mem_cat_id;
    let memcatData = await user.getDiscountByMemCatID(memCategory);
    discount = memcatData[0].discount_precentage;

  }


  res.json({ status: 1, flightdata: flightData , discount: discount});
};

module.exports = detailsforBookingConfim;
