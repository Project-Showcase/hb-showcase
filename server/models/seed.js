var sequelize = require('sequelize')

var populateDatabase = (queryInterface, Sequelize) => {
  return [
    queryInterface.bulkInsert('User', [
      { 
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
      }
      ])];
};