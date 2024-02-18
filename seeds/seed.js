const sequelize = require('../config/connection');
const seedMedication = require('./medicationData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // seed User first so that Medication has a User to belong to
  await seedUser();
  await seedMedication();

  process.exit(0);
};

seedAll();