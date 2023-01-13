const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

class userModel {
  static async registerUser(form) {
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

  static async registerGuest(form) {
    let id = await new Promise((resolve, reject) =>
      db.query(
        `SELECT insert_guest('${form.firstName}', '${form.lastName}', '${form.email}', '${form.birthday}', '${form.country}', '${form.phone}', '${form.passport}');`,
        (err, result) => {
          if (err) reject(err);
          else resolve(result[0]);
        }
      )
    );

    return id;
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

  static async getDiscountByMemCatID(id) {
    let memcatData = await new Promise((resolve, reject) =>
      db.query(
        `SELECT * FROM flight.member_category where mem_cat_id='${id}'`,
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      )
    );

    return memcatData;
  }
}

module.exports = userModel;
