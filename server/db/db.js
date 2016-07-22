//db on justin's domain: m2p_pickups_dbrtqqwqqgqq
//_____________________________MODULES_________________________________________
var mysql = require('mysql');
var tables = require('./tables.js');
var config = require('./dbConfig.js');


var createConnection = function() {

  connection = mysql.createConnection(config);

  connection.on('error', function(err) {
    console.error(err);
  });

}

createConnection();
tables.create();

module.exports = connection;

//*********************************
// var Sequelize = require('sequelize');
//
// var sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: config.host,
//   dialect: 'mysql'
// });
//
// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });
