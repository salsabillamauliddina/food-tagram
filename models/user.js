'use strict';
const bcrypt = require('bcrypt')
const { hashPassword } = require('../helpers/bycrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //*user 
      User.belongsToMany(models.Food, {
        through: models.Favourite
      })

      User.hasMany(models.Favourite)
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: ((users, option) => {
        users.password = hashPassword(users.password)
      })
    }
  });
  return User;
};