const bcrypt = require("bcryptjs");
const connection = require("../routes/db-config");
const booking = require("../models/bookingModel");

const register = async (req, res) => {
    
  // for (let entry of Object.entries(req.body.dataforbackend)) {
  //   console.log(entry);
  // }
  
  // booking.addBooking(req.body.dataforbackend)

  const queries = [
    {
      sql: 'INSERT INTO posts SET title = ?',
      values: ['s']
    },
    {
      sql: 'INSERT INTO tags SET name = ?',
      values: ['sg']
    }
  ];
  
  connection.beginTransaction(function(err) {
    if (err) {
      throw err;
    }
  
    // Iterate through the list of queries
    queries.forEach(function(query) {
      connection.query(query.sql, query.values, function(error, results, fields) {
        if (error) {
          return connection.rollback(function() {
            throw error;
          });
        }
      });
    });
  
    // Commit the transaction
    connection.commit(function(error) {
      if (error) {
        return connection.rollback(function() {
          throw error;
        });
      }
      console.log('success!');
    });
  });

};

module.exports = register;
