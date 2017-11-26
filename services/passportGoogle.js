const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model('usersGoogle');

passport.serializeUser((user, done) => {
    //console.log(user);
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    })
  });
  
  const clientID = process.env.googleClientID || keys.googleClientID;

passport.use(new GoogleStrategy(
    {
    clientID: clientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:3001/auth/google/callback",
    proxy: true
  }, function(accessToken, refreshToken, profile, done) {
  
      //console.log(accessToken, refreshToken, profile);

      //const existingUser = User.findOne({ googleId: profile.id});

        User.findOne({googleId: profile.id}, function (err, data){

           // console.log(profile);

           // console.log("****** Printing existing user****");
            //console.log(data);
            //console.log("****** END Printing existing user****");
              if (data) {
      
                  return done(null, data);
      
              }
      
              //const user = await new User({googleId}).save();
              User.create({googleId: profile.id, displayName:profile.displayName, email:profile.emails, photo:profile.photos}).then(function(user){
      
                  return done(null, user);
      
              })


        })

        //const existingUser = "";




        

  }));
  