const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class tblMediction extends Model {}

tblMediction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Douzeeg  : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ferqunsy: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gallery',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'painting',
  }
);

module.exports = tblMediction;