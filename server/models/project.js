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
  Project.bulkCreate([{ 
        projectGithub: 'https://github.com/sloloris/hb-final-project',
        title: 'FriendKeeper',
        description: 'The email-automating web application for those of us who struggle to keep in touch with the people who matter!',
        userId: 1
      },
      {
        projectGithub: 'https://github.com/leahyukelson/Night-Out',
        title: 'Night Out',
        description: 'A web application that allows a user to plan a night around a pre-planned event by combining the event with nearby restaurant or bar options using the Yelp API and sends an email itinerary to friends with SendGrid API.',
        userId: 2
      }])
  return Project;
};