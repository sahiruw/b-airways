const sql = require("mysql");
// const db = sql.createConnection({
//   host: process.env.HOST,
//   pass: process.env.PASSWORD,
//   databse: process.env.DATABASE,
//   user: process.env.USER,
// });

const db = sql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;