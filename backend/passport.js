const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID = "99314075766-jush36do4vtej7eld16cfjivbluhlgmb.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "fdc5a6e5ca0745015dff"
const GITHUB_CLIENT_SECRET = "9b6ff01c6babbb8eaf82237b9af9b23055f2cf61"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        done(null,profile)
  }
));


passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        done(null,profile)
  }
));




passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})