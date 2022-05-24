'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_game.hasOne(models.user_game_biodata,  { foreignKey:'id_user' });
      user_game.hasMany(models.user_game_history, { foreignKey:'id_user' });
      // define association here
    }
  }
  user_game.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game',
  });
  return user_game;
};