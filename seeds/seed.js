const sequelize = require('../config/connection');

// 2 databases for the Med Manager app: User and Medication.
const { User, Medication } = require('../models');

const userData = require('./userData.json');
const medicationData = require('./medicationData.json');

// seedDatabase uses the sequelize bulkCreate to insert data into the Med Manager's
// databases to use for testing.
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const medication of medicationData) {
    await Medication.create({
      ...medication,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
