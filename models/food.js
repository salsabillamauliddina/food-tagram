'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsToMany(models.User, {
        through: models.Favourite
      })
      Food.hasMany(models.Favourite)
    }
  };
  Food.init({
    food_name: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          args: true,
          msg: `Food name must be required!`
        }
      }
    } ,
    origin: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Origin must be required!`
        }
      }
    } ,
    category: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args: true,
          msg: `Category must be required!`
        }
      }
    } ,
    description: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          args: true,
          msg: `Description must be require`
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};