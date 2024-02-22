const router = require('express').Router();
const { Medication, User} = require('../models');
const withAuth = require('./../utils/auth');


// medication route 
router.get('/',  async (req, res) => {
     
      res.render('medication', {
     
        key: 'pass'
      
      });
      // console.log("medication is run...");
  });
  





// router.get('/', (req, res) => {
//   res.render('medication', {medication: req.session.medication,
//   });

//   });
  

// router.get('/', async (req, res) => {
// //   
//       res.render('medication');
    
// });

  module.exports = router;
  