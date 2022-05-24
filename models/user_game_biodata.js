'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_game_biodata.belongsTo(models.user_game, { 
        foreignKey: 'id_user', 
       onDelete: "SET NULL"
     });
      // define association here
    }
  }
  user_game_biodata.init({
    id_user: DataTypes.INTEGER,
    gender: DataTypes.CHAR,
    date_of_birth: DataTypes.DATEONLY,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_biodata',
  });
  return user_game_biodata;
};