const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");
const user = require("../models/userModel");

const login = async (req, res) => {
  const { username, password } = req.body;

  const userData = await user.getUserbyUsername(username);

  if (!userData[0]) return res.json({ status: 0 , message: "User is not registered!"});

  if (!(await bcrypt.compare(password, userData[0].password))) return res.json({ status: 0 , message: "Incorrect Password!"});

  const token = jwt.sign({ id: userData[0].ID }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  const cookieOptions = {
    expiresIn: new Date(
      Date.now() * process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httponly: true,
  };

  res.cookie("loguser", token, cookieOptions);

  return res.json({
    status: 1,
    message: "USer has been logged in! " + userData[0].ID,
  });

};

module.exports = login;
