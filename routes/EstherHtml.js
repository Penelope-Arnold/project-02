const express = require("express");
const router = express.Router();
const flash = require("connect-flash");
const { ensureAuthenticated } = require("../config/auth");
const db = require("../models");
//Welcome page
router.get("/", (req, res) => res.render("allTrips"));

//Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  let nameObj = {};
  db.User.findOne({
    where: {
      id: req.user
    }
  }).then(response => {
    nameObj["name"] = response.name;
    res.render("dashboard", nameObj);
  });
});

//allTrips page
router.get("/allTrips", ensureAuthenticated, (req, res) =>
  res.render("allTrips")
);

// router.get("/dashboard", (req, res) =>
//   res.render("dashboard")
// );

// router.get("/allTrips", (req, res) =>
//   res.render("allTrips")
// );

module.exports = router;
