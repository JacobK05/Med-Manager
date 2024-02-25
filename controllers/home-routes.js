const router = require("express").Router();
const { Medication, User } = require("../models");

// Login route
router.get("/login", (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

// Signup route
router.get("/signup", (req, res) => {
  // Login and signup are merged so use the same view
  res.render("login", { loggedIn: req.session.loggedIn });
});

// Home page
router.get("/", async (req, res) => {
  res.render("welcome");
});

module.exports = router;
