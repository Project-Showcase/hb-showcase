module.exports = (queryInterface, Sequelize) => {
  var populateDB = queryInterface.bulkInsert('User', [
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
      ]);
  return populateDB
};