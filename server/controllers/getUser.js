const db = require("../routes/db-config");

const getUser = (req, res) => {
  var id = req.query.id;
  var username = req.query.username;

  let field = "username";
  var val = username;
  if (!username) {
    field = "id";
    val = id;
  }

  db.query(
    `SELECT * FROM member WHERE ${field} = '${val}'`,
    [val],
    (err, result) => {
      if (err) throw err;
      delete result[0].password;
      return res.json({ status: 1, user: result[0] });
    }
  )
};

module.exports = getUser;
