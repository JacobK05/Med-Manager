// const router = require('express').Router();
// const { Medication, User} = require('../models');
// const withAuth = require('./../utils/auth');


// router.get('/',  async (req, res) => {
     
//   res.render('addMedication', {
 
//     indclude: [
//       {
//         model: Medication,
//       },
//     ],
  
//   });

// });

    
    
         


// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newMedication = await Medication.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newMedication);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const medicationData = await Medication.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!medicationData) {
//       res.status(404).json({ message: 'No medication found for this!'});
//       return;
//     }

//     res.status(200).json(medicationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


  //  module.exports = router;