const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/codecompendiumDB";
const app = express();

var userRoutes = require("./controllers/user_controller.js");
var savedItemRoutes = require("./controllers/savedItem_controller.js");
//var noteRoutes = require("./controllers/note_controller.js");

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

app.use("/", userRoutes);
console.log("print debug");
app.use("/", savedItemRoutes);
//app.use("/", noteRoutes);
console.log("print debug 2");


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useMongoClient: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
/*
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
*/

//test index.html to test backend items
app.get("/", function(req, res){

  res.sendFile(path.join(__dirname, "./testIndex.html"));

})

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
