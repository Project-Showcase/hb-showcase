'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
    },
    linkedIn: {
      type: DataTypes.STRING,
    },
    personalSite: {
      type: DataTypes.STRING,
    },
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: Project,
        key: 'projectId',
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.belongsTo(models.Project, {
          foreignKey: 'projectId',
          onDelete: CASCADE,
        })
      }
    }
  });
  return User;
};