const Medication = require('./Medication');
const User = require('./User');



User.hasMany(Medication, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Mediction.belongsTo(User, {
  foreignKey: 'userId',
});


module.exports = {Medication, User };
