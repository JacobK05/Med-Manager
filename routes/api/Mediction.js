const router = require('express').Router();
// use object destructuring to import our two models by name
const { Medication } = require('../../models');

// GET all Medication
router.get('/', async (req, res) => {
  try {
   
    const MedicationData = await Medication.findAll({
      include: [{ model: Medication }],
    });
    res.status(200).json( MedicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// GET a single Medication by Medication ID
router.get('/:id', async (req, res) => {
    try {
      const MedicationData = await Medication.findByPk(req.params.id, {
        include: [{ model: Medication }],
      });
  
      if (!MedicationData) {
        res.status(404).json({ message: '#' });
        return;
      }
  
      res.status(200).json(MedicationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a Medication
  router.post('/', async (req, res) => {
    try {
  
      const locationData = await Medication.create({
        // Medication: req.body.Medication,
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a Medication
  router.delete('/:id', async (req, res) => {
    try {
      const MedicationData = await Medication.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!MedicationData) {
        res.status(404).json({ message: '#!' });
        return;
      }
  
      res.status(200).json(MedicationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  