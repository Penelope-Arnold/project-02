const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const sequelize = require('sequelize');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();

var mysql = require("mysql2");

// Requiring our models for syncing
var db = require("./models");

// Passport Config
require('./config/passport')(passport);

// Connect to MySql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SerenCae@aol.com2019",
    database: "blogger"
  });
  
  //Connect to MySql
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to localhost 3306");
  });

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: false }));

// Express session middleware
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Global variables (adding our own custom middleware)
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
require("./routes/post-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);


const PORT = process.env.PORT || 5000;

// Syncing our sequelize models and starting Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.listen(PORT, console.log(`Server started on port ${PORT}`));