'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stack = sequelize.define('Stack', {
    name: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Stack;
};