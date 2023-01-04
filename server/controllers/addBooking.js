const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");
const user = require("../models/userModel");

const register = async (req, res) => {
    
  for (let entry of Object.entries(req.body.dataforbackend)) {
    console.log(entry);
  }

};

module.exports = register;
