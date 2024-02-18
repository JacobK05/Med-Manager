const Medication = require('./Medication');
const User = require('./User');

Medication.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Medication, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});


module.exports = { Medication, User };
