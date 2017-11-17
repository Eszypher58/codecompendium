const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");

const router = express.Router();

router.post("/save/:id", function(req, res){

    console.log("hit /save/ with post");

    const id = req.params.id;

    console.log(id);

    //var objID = mongoose.Types.ObjectId(id);
/*
    db.Article.findByIdAndUpdate(id, { $set: {saved: true}}, function(err, data){

        //res.redirect(req.get('referer'));
        res.json("saved article: " + id);

    })
*/
    res.end("sucess...");

});



module.exports = router;