const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");

const router = express.Router();

//this route is hit when user click on Oauth login. 
//During the Oauth process, we need to get read permission to user's profile, so we can get data from 
router.post("/save/:id", function(req, res){

    console.log("hit /save/ with post");

    //id could be some data from Github O-auth login, or the user name
    const id = req.params.id;

    let user = {

        user_name: id,
        user_created_categories: [],

    }

    console.log(id);

    //var objID = mongoose.Types.ObjectId(id);

    db.User.create(user, function(err, data){

        //res.redirect(req.get('referer'));
        res.json("saved article: " + id);

    })

    //res.end("sucess...");

});



module.exports = router;