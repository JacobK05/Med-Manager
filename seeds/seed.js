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
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
