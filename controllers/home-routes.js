const router = require('express').Router();
const { Medication, User} = require('../models');

// Login route (testing)
router.get('/login', (req, res) => {
  res.render('login', {loggedIn: req.session.loggedIn,
  });
  });

// Signup route (testing)
router.get('/signup', (req, res) => {
  // Login and signup are merged so use the same view
  res.render('login', {loggedIn: req.session.loggedIn,
  });
  });
  

// GET all (this is a test) for homepage
router.get('/', async (req, res) => {
//    res.render('login', {loggedIn: req.session.loggedIn,
      res.render('welcome');

});

  module.exports = router;
  