var bodyParser = require('body-parser');

var routes = require('../routes.js');

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers',
    'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name');
    next();
  });

  app.use(bodyParser.json());

  /* run through all possible routes */
  app.use('/api', routes);

}
