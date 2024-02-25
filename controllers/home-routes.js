const router = require("express").Router();
//const { Medication, User } = require("../models");

// Login route
router.get("/login", (req, res) => {
 /* if (req.session.logged_in) {
    res.redirect("/");
    return;
  }*/
  res.render("login", { logged_in: req.session.logged_in });
});

// Signup route
router.get("/signup", (req, res) => {
/*  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }*/
  // Login and signup are merged so use the same view
  res.render("login", { logged_in: req.session.logged_in });
});

// Home page
router.get("/", async (req, res) => {
  res.render("welcome", { logged_in: req.session.logged_in});
});

module.exports = router;
