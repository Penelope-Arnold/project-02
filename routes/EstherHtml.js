const express = require('express');
const router = express.Router();
const flash = require('connect-flash');
const {ensureAuthenticated} = require('../config/auth')
const db = require('../models')
//Welcome page
router.get('/', (req, res) => res.render('Welcome'));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    let nameObj = {}
    db.User.findOne({
        where: {
            id: req.user
          }
    }).then(response => {
        nameObj["name"] = response.name;
        res.render('dashboard', nameObj)
    })
    
});

module.exports = router;