const passport = require ("passport");
const githubStratergy = require("passport-github2").Strategy;
require('dotenv/config');

const GITHUB_CLIENT_ID = "b71fd24789180b7ca1a4"; 
const GITHUB_CLIENT_SECRET = "89b2080e0dddcba82c22b72ad41f039a445307c7";
const GITHUB_CALLBACK_URI = "http://localhost:8080/auth/github/callback";

const passportOptions = {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: GITHUB_CALLBACK_URI
};

passport.serializeUser(function(user,done){done(null, user);});
passport.deserializeUser(function(user,done){done(null, user);});

passport.use( new githubStratergy ({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: GITHUB_CALLBACK_URI
},
function (accessToken, refreshToken, profile, done) {
    profile.token = accessToken;
    profile.refreshToken = refreshToken;
     return done(null, profile);
    })
);

module.exports = passport;