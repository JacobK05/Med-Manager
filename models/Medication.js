const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Medication extends Model {}

Medication.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    genericName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dosage  : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frequency: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['used', 'no used'],
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'medication',
  }
);

module.exports = Medication;