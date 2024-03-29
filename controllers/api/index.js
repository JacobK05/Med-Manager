// Import just the router express
const router = require('express').Router();

// Import the routes. This is how we make our routes modular.
const userRouter = require('./userRouter');
const medicationRouter = require('./medicationRoutes');

// When a request is made to the /userRouter  path, it will be directed to the index.js in the controllers folder.
router.use('/userRouter', userRouter);
router.use('/medications', medicationRouter);

module.exports = router;
