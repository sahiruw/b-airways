const sql = require("mysql");
// const db = sql.createConnection({
//   host: process.env.HOST,
//   pass: process.env.PASSWORD,
//   databse: process.env.DATABASE,
//   user: process.env.USER,
// });

const db = sql.createConnection({
  user: "root",
  host: "localhost",
  password: "2129",
  database: "flight1",
});

module.exports = db;