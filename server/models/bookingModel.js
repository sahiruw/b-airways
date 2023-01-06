const db = require("../routes/db-config");
const userModel = require("./userModel");

const mysql = require('mysql2/promise')

/** See documentation from original answer */
async function transaction(queries, queryValues) {
    if (queries.length !== queryValues.length) {
        return Promise.reject(
            'Number of provided queries did not match the number of provided query values arrays'
        )
    }
    const connection = await mysql.createConnection(databaseConfigs)
    try {
        await connection.beginTransaction()
        const queryPromises = []

        queries.forEach((query, index) => {
            queryPromises.push(connection.query(query, queryValues[index]))
        })
        const results = await Promise.all(queryPromises)
        await connection.commit()
        await connection.end()
        return results
    } catch (err) {
        await connection.rollback()
        await connection.end()
        return Promise.reject(err)
    }
}
class bookingModel {
  static async addBooking(data) {
    let queries = []
    let values = []

    for (let entry of Object.entries(data)) {
      entry = entry[1];
      let seatID = entry[0]
      let userData = entry[1]

      if (!userData.isRegistered){
        queries.push('SELECT insert_member(?, ?, ?, ?, 1, ?, ?, ?)')
      }
    }
    
    // let status = await transaction()
    // return status;
  }

  
}

module.exports = bookingModel;
