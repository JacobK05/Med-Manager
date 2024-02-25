const router = require('express').Router();
const { Medication, User} = require('../models');
const withAuth = require('./../utils/auth');


// medication route 
router.get('/',  async (req, res) => {
     
  try {
   
    const medicationData = await Medication.findAll({
      include: [{ model: User }],
    });
    const medications = medicationData.map(medication => medication.get({ plain: true }))
    console.log(medications)
    res.status(200).render('medication', {medications});
  } catch (err) {
    res.status(500).json(err);
  }
//       // console.log("medication is run...");
  });
  
router.get('/addMedication', (req, res) => {
  res.render('addMedication', {
    logged_in: req.session.logged_in,
  });
})




// router.get('/', (req, res) => {
//   res.render('medication', {medication: req.session.medication,
//   });

//   });
  

// router.get('/', async (req, res) => {
// //   
//       res.render('medication');
    
// });

  module.exports = router;
  