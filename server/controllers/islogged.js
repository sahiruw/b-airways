const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");

const isLogged =  async (req, res) => {
  if (!req.cookies.loguser) return res.json({ status: 0 });

  const currentUser = jwt.verify(
    req.cookies.loguser,
    process.env.JWT_SECRET,
    (err, id) => {
      if (err) return null;
      else return id;
    }
  ); 

  if (currentUser == null) return res.json({ status: 0 });


  const currentUserData =  await user.getUserbyID(currentUser.id);

  if (currentUserData == null) return res.json({ status: 0 });
  else {
    return res.json({ status: 1, user: currentUserData[0].username });
  }
};

module.exports = isLogged;
