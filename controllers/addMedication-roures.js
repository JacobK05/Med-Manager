const router = require('express').Router();
const { Medication, User} = require('../models');
const withAuth = require('./../utils/auth');


// medication route 
router.get('/', withAuth, async (req, res) => {
      
      res.render('addMedication', {
      });
    
  });
  