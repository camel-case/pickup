var path = require('path');
var express = require('express');
var app = express();

var passport = require('passport');


/* serve up static files */
app.use(express.static('./client'));

/* run app through middleware */
require('./middleware/middleware.js')(app);
require('./middleware/passport.js')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.get('/login/facebook', passport.authenticate('facebook'));

app.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/Login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('*', function (req, res){
  res.sendFile(path.resolve('client', 'index.html'))
})

/* serve on port */
var port = process.env.PORT || 3000;
app.listen(port);

console.log('serving on port: ' + port);
