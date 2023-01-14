const bcrypt = require("bcryptjs");
const connection = require("../routes/db-config");
const booking = require("../models/bookingModel");
const user = require("../models/userModel")
const flight = require("../models/flightModel");

const addBooking = async (req, res) => {
  let addedIds = []
  let userSelectedSeats = req.body.userSelectedSeats;

  let bookedSeats = await flight.getReservedSeatsByID(req.body.flightID);
  bookedSeats = bookedSeats.map((seat) => seat.seat_no);
  // for (let seat of userSelectedSeats) {
  //   if (bookedSeats.includes(seat)) {
  //     res.send({status: 0, msg: "Seat already booked"});
  //     return;
  //   }
  // }

  for (let entry of Object.entries(req.body.userData)) {
    if (entry[1].isRegistered) {
      let email = entry[1].email
      let dataUser = await user.getUserbyUsername(email)
      addedIds.push(dataUser[0].ID)
      continue}

    try{
      let idAdded = await user.registerGuest(entry[1])
      idAdded = Object.entries(idAdded)[0][1]
      addedIds.push(idAdded)
    }
    catch (e) {
      console.log(e)
      res.send({status: 0, msg: "Error adding guest"})
      return;
    } 
  }

  if (addedIds.length < 5) {
    let rem = 5 - addedIds.length
    for (let i = 0; i < rem; i++) {
      addedIds.push("")
    }
  }

  if (userSelectedSeats.length < 5) {
    let rem = 5 - userSelectedSeats.length
    for (let i = 0; i < rem; i++) {
      userSelectedSeats.push("")
    } 
  }

  let bookingData = {
    flightID: req.body.flightID,
    seatClass : req.body.seatClass,
    bookedTime: req.body.currentTime,
    addedIds: addedIds,
    userSelectedSeats: userSelectedSeats,
    userCount: req.body.userCount
  }

  try {
    let sts = await booking.addBooking(bookingData)
    res.send({status: 1, msg: "Booking added successfully", bookingID: sts[0]['@code']})
  }
  catch (e) {
    console.log(e)
    res.send({status: 0, msg: "Error adding booking"})
    return;
  }
  };



module.exports = addBooking;
