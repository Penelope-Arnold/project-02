require("dotenv").config();
var mysql = require("mysql");
var connection;
var JAWSDB_URL =
  "mysql://y0oer6sd4wtdtjdm:dqvlrliure82or5q@s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/imh1whbm6zy1h310";

// if JAWSDB_URL exists, then Database is JawsDB on Heroku
if (JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL);
}
// else connect to local MySQL database
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "blogger"
  });
}

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
var sequelize = new Sequelize(
  "imh1whbm6zy1h310",
  "y0oer6sd4wtdtjdm",
  "dqvlrliure82or5q",
  {
    host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
  }
);

//export object
module.exports = sequelize;

// Create Connection to database with Sequelize
// if (process.env.JAWSDB_URL) {
//   var Sequelize = require("sequelize");
//   var sequelize = new Sequelize(
//     mysql.createConnection(process.env.JAWSDB_URL, {
//       dialect: "mysql"
//     })
//   );
// } else {
//   var Sequelize = require("sequelize");
//   var sequelize = new Sequelize(
//     "imh1whbm6zy1h310",
//     "y0oer6sd4wtdtjdm",
//     "dqvlrliure82or5q",
//     {
//       host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//       port: 3306,
//       dialect: "mysql"
//     }
//   );
// }
