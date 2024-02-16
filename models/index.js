const Medication = require('./Medication');
const User = require('./User.js');


Medication.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Medication, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});




module.exports = {Medication, User };
