const db = require("../routes/db-config");
const userModel = require("./userModel");

class bookingModel {
  static async addBooking(username, password) {
    let status = await new Promise((resolve, reject) =>
      db.query(
        `SELECT insert_member('John', 'Doe', '${username}', '${password}', 1, '2000-01-01', 'USA', '123-456-7890');`,
        (err, result) => {
          if (err) reject(err);
          else resolve(true);
        }
      )
    );

    return status;
  }
}

module.exports = bookingModel;
