const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const UserGithub = mongoose.model('usersGithub');

passport.serializeUser((user, done) => {
    console.log("in serialize");
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    console.log("in deserialize");
    UserGithub.findById(id).then(user => {
      done(null, user);
    })
  });
  
  const githubClientID = process.env.githubClientID || keys.githubClientID;
  const githubClientSecret = process.env.githubClientSecret || keys.githubClientSecret;


  passport.use(new GithubStrategy({
    clientID: githubClientID,
    clientSecret: githubClientSecret,
    callbackURL: "http://127.0.0.1:3001/auth/github/callback",
    proxy: true
  },
  function(accessToken, refreshToken, profile, done) {
  
      const {id, displayName, username, profileURL} = profile;
  
      const profilePhoto = profile.photos[0].value;

      console.log(profile);
  
      UserGithub.find({
  
        githubId: id,
  
      }).then(function(err, data){
  
        if (data) {

            return done(null, data);
        
        }

  
          console.log("did not find user, add him or her");
  
          UserGithub.create({
            
                      githubId: id,
                      display_name: displayName,
                      user_name: username,
                      profileURL: profileURL,
                      photo: profilePhoto
            
                    }, function(err, user){
  
  
            console.log("user created");
  
            return done(null, user);
  
          })
  
        } 
  
      )
  
  }
  ));
  