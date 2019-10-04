require("dotenv").config();
var mysql = require("mysql");
var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "burgers_db"
});
// }

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

//Create Connection to database with Sequelize
var Sequelize = require("sequelize");

var sequelize = new Sequelize("images_db", "root", "Altringer9(", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

//export object
module.exports = sequelize;
