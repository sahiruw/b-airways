const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

const register = async (req, res) => {
  const { username, pass:rawPass } = req.body;
  
  db.query(
    `SELECT username FROM member WHERE username = '${username}'`,
    [username],
    async (stop, chkuser) => {
      if (stop) throw stop;
      if (chkuser[0]) {
        return res.json({ status: 0, message: "Username already exists!" });
      }
      const password = await bcrypt.hash(rawPass, 10);
      db.query(`INSERT INTO member (username, password) VALUES ('${username}', '${password}')`, {}, (err, result) => {
        if (err) throw err;
        return res.json({status:1, message:"User has been registered!"})
      });
    });
};

module.exports = register
