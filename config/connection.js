// 1. Create new file named ".env"
// 2. In the .env file, copy/paste the line below. Replace PASSWORD with your password (no quotes or anything)
//     DB_PASS=PASSWORD
// 3. Nobody sees your password, yahoo!

require("dotenv").config();
var mysql = require("mysql");
var connection;

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "blogger"
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

var sequelize = new Sequelize("blogger", "root", process.env.DB_PASS, {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

//export object
module.exports = sequelize;