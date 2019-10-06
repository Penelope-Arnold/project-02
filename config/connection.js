// 1. Create new file named ".env"
// 2. In the .env file, copy/paste the line below. Replace PASSWORD with your password (no quotes or anything)
//     DB_PASS=PASSWORD
// 3. Nobody sees your password, yahoo!

require("dotenv").config();
var mysql = require("mysql");
var connection;

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

  var sequelize = new Sequelize("imh1whbm6zy1h310", "y0oer6sd4wtdtjdm", "dqvlrliure82or5q", {
  host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql"
});

//export object
module.exports = sequelize;
