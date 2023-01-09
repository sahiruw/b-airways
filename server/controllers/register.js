const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");
const user = require("../models/userModel");

const register = async (req, res) => {
  let form = req.body.form;
  // const { username, pass: rawPass } = req.body;
  const username = form.email;
  const rawPass = form.pass;

  const userData = await user.getUserbyUsername(username);

  if (userData[0]) {
    return res.json({ status: 0, message: "Username already exists!" });
  }
  const password = await bcrypt.hash(rawPass, 10);
  form.pass = password;

  await user.registerUser(form);
  return res.json({ status: 1, message: "User has been registered!" });
};

module.exports = register;
