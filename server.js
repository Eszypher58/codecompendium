const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cookieSession = require("cookie-session");

const passport = require('passport');
const keys = require("./config/keys");
require("./models/userGoogleOauth");
require("./services/passportGoogle");
require("./models/userGithubOauth");
require("./services/passportGithub");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const userRoutes = require("./controllers/user_controller.js");
const savedItemRoutes = require("./controllers/savedItem_controller.js");

mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI);


app.use(cookieSession({

    maxAge: 30 * 24 *60* 60 * 1000,
    keys: [keys.cookieKey],

}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
app.use("/", savedItemRoutes);
app.use("/", userRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
} else {

  app.get("*", function(req, res) {
    
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });

}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
