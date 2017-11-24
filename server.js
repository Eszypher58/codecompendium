const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/codecompendiumDB";


//setup for passport gihub O-auth
var passport = require('passport');
//var util = require('util');
var session = require('express-session');
var methodOverride = require('method-override');
//var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');

/*
const GITHUB_CLIENT_ID = "9f864267db9eb6cd17ea";
const GITHUB_CLIENT_SECRET = "55361f61718360f5a77388cfe87379ba8660140d";

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    
    console.log(profile);

    return done(null, profile);
  });
}
));
*/

const app = express();

app.use(partials());
app.options("*",cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


const userRoutes = require("./controllers/user_controller.js");
const savedItemRoutes = require("./controllers/savedItem_controller.js");
const loginRoutes = require("./routes/githubOAuth.js");

app.use("/", loginRoutes);
app.use("/", userRoutes);
app.use("/", savedItemRoutes);



mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useMongoClient: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


//test index.html to test backend items
/*
app.get("*", function(req, res){

   res.sendFile(path.join(__dirname, "./testIndex.html"));

 })
*/

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//could be deleted
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}