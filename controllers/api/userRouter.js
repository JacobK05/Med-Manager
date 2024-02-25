// Import just the router express
const router = require("express").Router();

// use object destructuring to import our model by name
const { User } = require("../../models");

// GET all user
router.get("/", async (req, res) => {
  try {
    console.log("in single slash get");
    const userData = await User.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user by user ID
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!userData) {
      res.status(404).json({ message: "#" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new user (Signup)
router.post("/", async (req, res) => {
  try {
    console.log("in single slash post");
    console.log(req.body);
    const locationData = await User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
    });

    // Save session information about the logged in state to use in the html to change
    // Login to Logout and vice versa.
    req.session.logged_in = true;
    req.session.user_id = locationData.id;
    req.session.save(() => {
      res.status(200).json(locationData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "#!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
// If a POST request is made to /api/userRouter/login (from controllers/api, js code),
// the function checks to see if the user information matches the information in the database and
// logs the user in.
// If correct, the user ID and logged-in state are saved to the session within the request object.
router.post("/login", async (req, res) => {
  try {
    console.log(
      "login*************************************************************************"
    );

    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // user and password are validated.
    req.session.logged_in = true;
    req.session.user_id = dbUserData.id;
    console.log(dbUserData);
    req.session.save(() => {
      console.log(
        "File: user-routes.js ~ line 62 ~ req.session.save ~ req.session.cookie",
        req.session.cookie
      );
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  console.log(req.session.logged_in);
  console.log(req.session.user_id);


});

// Logout.
// If a POST request is made to /api/userRouter/logout, the function checks the logged_in state in the request.session object and destroys that session if logged_in is true.
router.post("/logout", (req, res) => {
  console.log("in logout");

  if (req.session.logged_in) {
    // initialize values
    req.session.user_id = null;
    req.session.logged_in = false;

    req.session.save(() => {
      console.log("logged out");
    });
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
