var express = require('express');
var router = express.Router();
var controller = require('./controllers/appController.js')

for (var route in controller) {
  router.route("/" + route)
    .get(controller[route].get)
    .post(controller[route].post)
    .put(controller[route].put)
    .delete(controller[route].delete);
}

module.exports = router;
