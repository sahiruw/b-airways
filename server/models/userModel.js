const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

class userModel {
  static async registerUser(form) {
    console.log(form);
    let status = await new Promise((resolve, reject) =>
      db.query(
        `SELECT insert_member('${form.firstName}', '${form.lastName}', '${form.email}', '${form.pass}', 1, '${form.birthday}', '${form.country}', '${form.phone}', '${form.passport}');`,
        (err, result) => {
          if (err) reject(err);
          else resolve(true);
        }
      )
    );

    return status;
  }

  static async getUserbyID(id) {
    let userData = await new Promise((resolve, reject) =>
      db.query(`SELECT * FROM member WHERE ID = ${id}`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
    );

    return userData;
  }

  static async getUserbyUsername(usernamee) {
    let userData = await new Promise((resolve, reject) =>
      db.query(
        `SELECT * FROM member WHERE email = '${usernamee}'`,
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      )
    );

    return userData;
  }
}

module.exports = userModel;
