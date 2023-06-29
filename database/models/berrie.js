'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Berrie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Berrie.init({
    name: DataTypes.STRING,
    ability: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Berrie',
  });
  return Berrie;
};