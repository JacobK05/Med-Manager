const { Medication } = require('../models');

const medicationData =
[
    {
      "genericName": "Aspirin",
      "dosage": "1-80mg tab",
      "frequency": "Daily"
    },
    {
      "genericName": "Vitamin D3",
      "dosage": "2-2000mcg tab",
      "frequency": "Daily"
    },
    {
      "genericName": "Calcium",
      "dosage": "1-2000mg tab",
      "frequency": "Daily"
    }
  ]
  
  const seedMedication = () => Medication.bulkCreate(medicationData);

  module.exports = seedMedication;