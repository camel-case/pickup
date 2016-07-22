var passport = ('../middleware/passport.js');
var model = require('../models/gamesModel.js');

module.exports = {
  'games': {
    get: function(req, res) {
      model.games.get(function(data, msg) {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send(msg);
        }
      })
    },
    post: function(req, res) {
      model.games.post(function(data, msg) {
        if (data) {
          res.status(201).json({success: true});
        } else {
          res.status(404).send(msg);
        }
      }, req.body);
    },
    put: function(req, res) {
      model.games.put(function(data, msg) {
        if (data) {
          res.status(201).send(data);
        } else {
          res.status(404).send(msg);
        }

      }, req.body);
    },
    delete: function(req, res) {
      model.games.delete(function(data, msg) {
      })
    }
  }
}
