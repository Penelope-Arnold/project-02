"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
// **** PG - Requiring 'connection.js' below, which defines 'sequelize'. Therefore we can delete the if statement below
var sequelize = require("../config/connection.js");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
// **** PG - Deleted entire 'config.json' file. No longer needed since 'sequelize' is defined in 'connection.js', and 'connection.js' is required above by 'var sequelize'
// var config = require(__dirname + "/../config/config.json")[env];
var db = {};

// **** PG - Can be deleted now. Replaced with 'connection.js' (lines 30+ define 'sequelize')) *** //
// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
// **** PG - Can be deleted now. Replaced with 'connection.js' (lines 30+ define 'sequelize')) *** //

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
