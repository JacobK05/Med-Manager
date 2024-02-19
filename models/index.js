const Medication = require('./Medication');
const User = require('./User');

// Creates a relationship between User and Medication models, with a "belongs to" relationship of the Medication to the User.
Medication.belongsTo(User, {
  foreignKey: 'userId',
});

// Creates a relationship between User and Medication models, with the User having a "has many" relationship with Medication model.
User.hasMany(Medication, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});


module.exports = { Medication, User };
