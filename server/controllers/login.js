const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

const login = async (req, res) => {
  const { username, password } = req.body;

  db.query(
    `SELECT * FROM member where username = '${username}'`,
    [username],
    async (stop, chkuser) => {
      if (stop) throw stop;
      if (!chkuser[0] || !(await bcrypt.compare(password, chkuser[0].password))) {
        return res.json({ status: 0, message: "USer is not registered!" });
      }
      console.log(chkuser[0].ID)
      const token = jwt.sign({ id: chkuser[0].ID }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
      });
      const cookieOptions = {
        expiresIn: new Date(
          Date.now() * process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httponly: true,
      };

      res.cookie('loguser', token, cookieOptions)

      return res.json({status:1,message:"USer has been logged in! " + chkuser[0].ID})
    }
  );
};

module.exports = login
