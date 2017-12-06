const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
//const cors = require("cors");
const PORT = process.env.PORT || 3001;


//------

const cookieSession = require("cookie-session");

//setup for passport gihub O-auth
const passport = require('passport');
//const GoogleStrategy = require("passport-google-oauth20").Strategy
//var util = require('util');
//var session = require('express-session');
//var methodOverride = require('method-override');
//var GitHubStrategy = require('passport-github2').Strategy;
//var partials = require('express-partials');
const keys = require("./config/keys");
require("./models/userGoogleOauth");
require("./services/passportGoogle");
require("./models/userGithubOauth");
require("./services/passportGithub");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//const userRoutes = require("./controllers/user_controller.js");
const savedItemRoutes = require("./controllers/savedItem_controller.js");
//const loginRoutes = require("./routes/githubOAuth.js");

//app.use("/", loginRoutes);
//app.use("/", userRoutes);


//---






//---
//const MONGODB_URI = process.env.mongoURI || keys.mongoURI;
mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI);
//mongoose.connect("mongodb://localhost/codecompendiumDB");

app.use(cookieSession({

    maxAge: 30 * 24 *60* 60 * 1000,
    keys: [keys.cookieKey],

}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
app.use("/", savedItemRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

/*
// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
*/

//test index.html to test backend items
/*
app.get("*", function(req, res){

   res.sendFile(path.join(__dirname, "./testIndex.html"));

 })
*/

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
