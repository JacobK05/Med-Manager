const router = require('express').Router();
const { Medication, User} = require('../models');

// medication route 
router.get('/', (req, res) => {
  res.render('medication', {medication: req.session.medication,
  });

  });
  

router.get('/', async (req, res) => {
//   
      res.render('medication');
    
});

  module.exports = router;
  