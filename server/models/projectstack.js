'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProjectStack = sequelize.define('ProjectStack', {
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stackId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        ProjectStack.belongsTo(models.Project, {
          foreignKey: 'ProjectId',
        }),
        ProjectStack.belongsTo(models.Stack, {
          foreignKey: 'name',
        })
      }
    }
  });
  return ProjectStack;
};