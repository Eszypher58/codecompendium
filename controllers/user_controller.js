const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");
const User = mongoose.model('usersGoogle');
const router = express.Router();

//this route is hit when user click on Oauth login. 
//During the Oauth process, we need to get read permission to user's profile, so we can get data from 
router.post("/api/check/:id", function(req, res){

    console.log("hit /api/check/");

    const googleId = req.params.id;

    console.log(req.body);

    const displayName  = req.body.Name;
    const emails = req.body.Email;
    const photos = req.body.Photo;

    console.log(displayName, emails, photos);
    
    User.findOne({googleId: googleId}, function (err, data){
        
                   // console.log(profile);
        
                    console.log("****** Printing existing user****");
                    console.log(data);
                    console.log("****** END Printing existing user****");
                      if (data) {
              
                        console.log("inside data");
                        res.json("user in db");
              
                      } else {
              
                      //const user = await new User({googleId}).save();
                      User.create({googleId: googleId, displayName:displayName, email:emails, photo:photos}).then(function(user){
              
                        console.log("inside create");
        
                          res.json("created user");
              
                      })
                    }
        
                })

});



module.exports = router;