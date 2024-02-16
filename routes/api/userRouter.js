const router = require('express').Router();
// use object destructuring to import our two models by name
const { user } = require('../../models');

// GET all user
router.get('/', async (req, res) => {
  try {
   
    const userData = await user.findAll({
      include: [{ model: user }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET a single user by user ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await user.findByPk(req.params.id, {
      include: [{ model: user }],
    });

    if (!userData) {
      res.status(404).json({ message: '#' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a user
router.post('/', async (req, res) => {
  try {

    const locationData = await user.create({
      // user: req.body.user_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await user.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: '#!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
