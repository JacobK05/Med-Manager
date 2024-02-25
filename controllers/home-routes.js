const router = require("express").Router();
//const { Medication, User } = require("../models");

// Login route
router.get("/login", (req, res) => {
  // ToDo: Need to check if the user is already logged in and then go to the medication page

  res.render("login", { logged_in: req.session.logged_in });
});

// Signup route
router.get("/signup", (req, res) => {
  // Login and signup are merged so use the same view
    // ToDo: Need to check if the user is already logged in and then go to the medication page

  res.render("login", { logged_in: req.session.logged_in });
});

// Home page
router.get("/", async (req, res) => {
  res.render("welcome", { logged_in: req.session.logged_in});
});

// Medication page
router.get("/medication", async (req, res) => {
  // ToDo: Need to pass in the user id also, once the medication view is ready.
  res.render("medication", { logged_in: req.session.logged_in});
});

module.exports = router;
