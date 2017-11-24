
const express = require('express');
var passport = require('passport');
const db = require("./../models");
const path = require("path");
const router = express.Router();

//setup for passport gihub O-auth
//var passport = require('passport');
//var util = require('util');
//var session = require('express-session');
//var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;
//var partials = require('express-partials');

const GITHUB_CLIENT_ID = "9f864267db9eb6cd17ea";
const GITHUB_CLIENT_SECRET = "55361f61718360f5a77388cfe87379ba8660140d";

passport.serializeUser(function(user, done) {
  console.log(user);
  
  done(null, user);
  
});

passport.deserializeUser(function(obj, done) {
  console.log(obj)
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3001/welcome"
},
function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  //process.nextTick(function () {
    
    //console.log(profile);

    const {id, displayName, username, profileURL} = profile;

    const profilePhoto = profile.photos[0].value;

    //console.log(profilePhoto);

    db.User.find({

      id: id,

    }).then(function(data){

      //console.log(data);

      if (data.length === 0) {

        console.log("did not find user, add him or her");

        const user = {

          id: id,
          display_name: displayName,
          user_name: username,
          profileURL: profileURL,
          photo: profilePhoto

        }

        //console.log(user)

        db.User.create(user, function(err, data){

          //place holder value
          //res.json("user created");

          console.log("user created");

          //return done(null, profile);

        })

      } else {

        //return done(null, profile);
        console.log("user found");

      }

    })

    return done(null, profile);
    
  //});
}
));


router.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }),
function(req, res){
  // The request will be redirected to GitHub for authentication, so this
  // function will not be called.

  console.log("Test");

});


router.get('/welcome', 
passport.authenticate('github', { failureRedirect: '/login' }),
function(req, res) {

  //console.log("req.user: " + req.user);
  console.log("*****Printing req.user*****");
  console.log(req.user);
  console.log("*****END Printing req.user*****");



  console.log("need to redirect to my bookmark");
  res.writeHead(302, {
    "Location": "http://localhost:3000/mybookmark"
})
  //console.log(res);
  //res.redirect('/mybookmark');
  //res.sendFile(path.join(__dirname, "./../client/public/index.html"));
  //res.json("in callback...");
});

module.exports = router;
