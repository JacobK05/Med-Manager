const tblMediction = require('./tblMediction');
const tblUser = require('./tbluser');



tblUser.hasMany(tblMediction, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

tblMediction.belongsTo(tblUser, {
  foreignKey: 'userId',
});


module.exports = {tblMediction, tblUser };
