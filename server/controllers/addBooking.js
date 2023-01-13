const bcrypt = require("bcryptjs");
const connection = require("../routes/db-config");
const booking = require("../models/bookingModel");

const register = async (req, res) => {
    
  for (let entry of Object.entries(req.body.userSelectedSeats)) {
    console.log(entry);
  }
  
  // booking.addBooking(req.body.dataforbackend)


  };



module.exports = register;
