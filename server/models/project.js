'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    projectGithub: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
          Project.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: CASCADE,
        })
      }
    }
  });
  return Project;
};