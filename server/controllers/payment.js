const booking = require("../models/bookingModel");
const user = require("../models/userModel");
const flight = require("../models/flightModel");

const payment = async (req, res) => {
  let sts  = await booking.addTransaction(req.body);
};

module.exports = payment;
