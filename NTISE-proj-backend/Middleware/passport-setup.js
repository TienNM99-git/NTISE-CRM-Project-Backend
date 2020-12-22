const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '41487083680-h1tfgem76ot4oqlcjvtssc3au8vlo04p.apps.googleusercontent.com',
    clientSecret: 'osoTth8ucACQk5lD7us1fKM9',
    callbackURL: "http://localhost:3001/User/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));
passport.use(new facebookStrategy({
    // pull in our app id and secret from our auth.js file
    clientID        : "476044366715885",
    clientSecret    : "133d001aa13bec0db869999a49063b09",
    callbackURL     : "http://localhost:3001/User/facebook/callback",
    passReqToCallback: true
    // profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email']
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
}));
