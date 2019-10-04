// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/authentication");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // cms route loads cms.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));

    //will get all posts from the database 

  });

  // blog route loads blog.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));

    //Will grab the users previous posts AND users likes 
  });

  // users route loads user-manager.html
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-manager.html"));
  });

};
