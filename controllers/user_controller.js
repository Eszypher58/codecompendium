const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");
const User = mongoose.model('usersGoogle');
const router = express.Router();

//this route is hit when user click on Oauth login. 
//During the Oauth process, we need to get read permission to user's profile, so we can get data from 
router.post("/api/check/:id", function(req, res){

    const googleId = req.params.id;
    const displayName  = req.body.Name;
    const emails = req.body.Email;
    const photos = req.body.Photo;
    
    User.findOne({googleId: googleId}, function (err, data){
        
                      if (data) {
              
                        res.json("user in db");
              
                      } else {
              
                      User.create({googleId: googleId, displayName:displayName, email:emails, photo:photos}).then(function(user){
              
              
                          res.json("created user");
              
                      })
                    }
        
                })

});



module.exports = router;