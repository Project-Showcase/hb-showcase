// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created
const models = require('../server/models');

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);


models.sequelize.sync().then(() => {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => {
  //   debug('Express server listening on port ' + server.address().port);
  // });
  server.on('error', onError);
  server.on('listening', onListening);
});