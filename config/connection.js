// 1. Create new file named ".env"
// 2. In the .env file, copy/paste the line below. Replace PASSWORD with your password (no quotes or anything)
//     DB_PASS=PASSWORD
// 3. Nobody sees your password, yahoo!

require("dotenv").config();
var mysql = require("mysql");
var connection;

<<<<<<< HEAD
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {

console.log(process.env.DB_PASS);
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else { 
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "blogger"
});
=======
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log(process.env.DB_PASS);
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "blogger"
  });
>>>>>>> 658f2f35b44c3f454f21b0c65442f7b2cd9f14a0
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

var sequelize = new Sequelize("blogger", "root", process.env.DB_PASS, {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

//export object
module.exports = sequelize;
