const bcrypt = require("bcryptjs");
const connection = require("../routes/db-config");
const booking = require("../models/bookingModel");
const user = require("../models/userModel")

const register = async (req, res) => {
  let addedIds = []
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
      break
    }
    

  }
  
  // booking.addBooking(req.body.dataforbackend)


  };



module.exports = register;
