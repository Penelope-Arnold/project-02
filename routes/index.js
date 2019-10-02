const express = require('express');
const router = express.Router();
//const {ensureAuthenticated} = require('../config/auth')

//Welcome page
router.get('/', (req, res) => res.render('Welcome'));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
    name: req.user.name
}));

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router; 

