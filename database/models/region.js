'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Region.hasMany(models.Pokemon, { foreignKey: 'RegionId' });
    }
  }
  Region.init({
    name: DataTypes.STRING,
    cardinal_point: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Region',
  });
  return Region;
};