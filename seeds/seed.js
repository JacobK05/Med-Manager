/*const sequelize = require('../config/connection');
const seedMedication = require('./medicationData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // seed User first so that Medication has a User to belong to
  await seedUser();
  await seedMedication();

  process.exit(0);
};

seedAll();*/
const sequelize = require('../config/connection');

const { User, Medication } = require('../models');

const userData = require('./userData.json');
const medicationData = require('./medicationData.json');

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
