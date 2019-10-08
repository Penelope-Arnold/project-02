require("dotenv").config();
var mysql = require("mysql");
var connection;

connection = mysql.createConnection({
  host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "y0oer6sd4wtdtjdm",
  password: dqvlrliure82or5q,
  database: "imh1whbm6zy1h310"
});

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
