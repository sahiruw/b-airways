const db = require("../routes/db-config");
const userModel = require("./userModel");

class bookingModel {

    static async addBooking(data){
        let sts = await new Promise((resolve,reject) => {
            const sqlStatement = `call add_booking ('${data.addedIds[0]}','${data.addedIds[1]}','${data.addedIds[2]}','${data.addedIds[3]}','${data.addedIds[4]}','${data.userSelectedSeats[0]}','${data.userSelectedSeats[1]}','${data.userSelectedSeats[2]}','${data.userSelectedSeats[3]}','${data.userSelectedSeats[4]}','${data.flightID}','${data.bookedTime}','${data.seatClass}','${data.userCount}', @code)`;
            db.query(sqlStatement,(err,result) => {
                if (err) reject (err);
                else resolve(result);
            })
        })

        let bID = await new Promise((resolve,reject) => {
          const sqlStatement = `select @code;`;
          db.query(sqlStatement,(err,result) => {
              if (err) reject (err);
              else resolve(result);
          })
      })

        return bID;
    }

}

module.exports = bookingModel;