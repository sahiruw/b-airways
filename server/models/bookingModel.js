const connection = require("../routes/db-config");
const userModel = require("./userModel");

const mysql = require('mysql2/promise')



class bookingModel {
  static async addBooking(data) {
    let queries = []
    let values = []

    try {
      connection.beginTransaction()
    
    for (let entry of Object.entries(data)) {
      entry = entry[1];
      let seatID = entry[0]
      let userData = entry[1]

      if (!userData.isRegistered){
        queries.push('SELECT insert_guest(?, ?, ?, ?, ?, ?, ?)')
        values.push([userData.firstName, userData.lastName, userData.email, userData.birthday, userData.country, userData.phone, userData.passport])
        connection.query('SELECT insert_guest(?, ?, ?, ?, ?, ?, ?)',[userData.firstName, userData.lastName, userData.email, userData.birthday, userData.country, userData.phone, userData.passport], function(result, err){
          console.log(result);
        })
      }
    }
    }

    catch (err) {
      connection.rollback()
    }
    
  }}

module.exports = bookingModel;
