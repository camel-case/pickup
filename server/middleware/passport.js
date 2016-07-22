var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport){
  passport.use(new FacebookStrategy({
      clientID: 913249382025037,
      clientSecret: '7d471358fd712303e374c3b433c5b284',
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ facebookId: profile.id }, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
      });
    }
  ));
}
