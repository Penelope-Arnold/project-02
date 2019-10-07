const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const app = express();

var mysql = require("mysql2");

// Requiring our models for syncing
var db = require("./models");

// Passport Config
require("./config/passport")(passport);

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Express body parser
app.use(express.urlencoded({ extended: false }));

// Express session middleware
app.use(
  session({
    secret: "secret",
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
// app.use(express.static("public"));

app.use("/views", express.static("views"));

// Global variables (adding our own custom middleware)
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", require("./routes/EstherHtml.js"));
app.use("/users", require("./routes/users.js"));
// app.use("/index", require("./routes/EstherHtml.js"));
require("./routes/post-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
//require("./routes/html-routes.js")(app);

const PORT = process.env.PORT || 5000;

// Syncing our sequelize models and starting Express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
