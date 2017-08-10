// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const models = require('../server/models');
const populateDatabase = require('../server/models/seed')

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
models.sequelize.sync().then(() => {
    sequelize.populateDatabase();
    server.listen(port);
})
