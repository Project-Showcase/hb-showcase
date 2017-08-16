const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('hb-showcase', 'leahbelle', null, {
  host: 'localhost',
  dialect: 'postgres'
});
// const sequelize = new Sequelize('postgres://user:leahbelle:5432/hb-showcase')

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/testing', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/templates/base.html'))
});

app.get('/db_connection_testing', (req, res) => {
  res.status(200).send(
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connected to DB.')
    })
    .catch(err => {
      console.error('Unable to connect to DB.', err)
    })
  )
});

app.get('/get_card_info', (req, res) => {
  
    var users = sequelize.Userss.findAll({
      attributes: ['firstName', 'lastName', 'github', 'linkedIn'],
      where: {
        id: [1,2]
      }
    });
    console.log(users)
  }
  // res.status(200).send({
  //   users: users
  // })
);

app.get('/get-card-json', (req, res) => res.status(200).send({ 
  users: [
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
      },
  ],
  projects: [
    {    
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
    },
  ],
}));

module.exports = app;