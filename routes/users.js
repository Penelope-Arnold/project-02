const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');

//User model
const db = require('../models');

//Login Page
router.get('/login', (req, res) => res.render('Login'));

//Register Page
router.get('/register', (req, res) => res.render('Register'));

// Register
router.post('/register', (req, res) => {

  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    //Register validation completed; next check if email is already in use:
    db.User.findOne({
      where: { email: email }
    }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {

        var newUser = {
          name: name,
          email: email,
          password: password
        }

        db.User.create(newUser).then(user => {
          // res.redirect('/users/login');

          //Hash Password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) throw err;
              //Set password to hashed
              user.password = hash;
              user
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }).catch(err => {
        })
      }
    });
  }
});

//Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

//Logout Handle
router.get('/logout', function (req, res){
  req.session.destroy(function (err) {
    res.redirect('/users/login');
  });
});

// router.get('/logout', (res, req) => {
//   req.logout()
//   req.flash('success_msg', 'You are logged out')
//   res.redirect('/users/login');
// });

module.exports = router;