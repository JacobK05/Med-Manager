const router = require('express').Router();
const userRouter = require('./userRouter');

router.use('/userRouter', userRouter);

module.exports = router;
