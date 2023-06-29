'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.belongsTo(models.Region, { foreignKey: 'RegionId' });
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    RegionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Region', 
        key: 'id', 
      },
    },
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};