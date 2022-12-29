const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

class userModel {
  static async registerUser(username, password) {

    let status = await new Promise((resolve, reject) =>
    db.query(`SELECT insert_member('John', 'Doe', '${username}', '${password}', 1, '2000-01-01', 'USA', '123-456-7890');`, (err, result) => {
      if (err) reject(err);
      else resolve(true);
    })
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
      db.query(`SELECT * FROM member WHERE email = '${usernamee}'`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
    );

    return userData;
  }

  


}

module.exports = userModel;
