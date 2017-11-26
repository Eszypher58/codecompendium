const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
//const cors = require("cors");
const PORT = process.env.PORT || 3001;
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/codecompendiumDB";

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
app.use("/", savedItemRoutes);

//---






//---

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
