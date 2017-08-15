'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
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
  User.bulkCreate([{ 
        firstName: 'Isabelle',
        lastName: 'Miller',
        github: 'sloloris',
        linkedIn: 'https://www.linkedin.com/in/isabelle-miller/'
      },
      {
        firstName: 'Leah',
        lastName: 'Yukelson',
        github: 'leahyukelson',
        linkedIn: 'https://www.linkedin.com/in/leahyukelson/'
      }])
  return User;
};