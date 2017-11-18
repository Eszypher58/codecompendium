const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");

const router = express.Router();

//this route is hit when user wants to save items (link/text)
// 
router.post("/saveitem", function(req, res){

    console.log("hit /saveitem with post");

    //id is a palce holder for data that user wants to save
    const id = req.params.id;

    //the data from front end is saved into this object, to be placed into mongodb
    let savedItem = {

        title: "",
        link: "",
        categories: "",
        description: "",
        meta_tag_link: "",
        time_stamp: "",
        like: 0,
        dislike: 0, 

    }

    console.log(id);

    //var objID = mongoose.Types.ObjectId(id);

    db.User.create(savedItem, function(err, data){

        //res.redirect(req.get('referer'));
        res.json("saved Item: " + id);

    })

    //res.end("sucess...");

});



module.exports = router;