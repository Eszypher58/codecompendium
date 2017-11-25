const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");

const router = express.Router();

//this route is hit when user wants to save items (link/text)
router.post("/api/save_entity", function(req, res){

    console.log("hit /save_entity with post");

    //entity is a palce holder for data that user wants to save
    const entity = req.body;

    console.log(entity);

    console.log(Date.now());

    const {title, link, categories, description} = entity;

    //the data from front end is saved into this object, to be placed into mongodb
    let savedItem = {

        title: title,
        link: link,
        categories: categories,
        description: description,
        meta_tag_link: "",
        time_stamp: Date.now(),
        like: 0,
        dislike: 0, 

    }

    console.log(savedItem);

    //var objID = mongoose.Types.ObjectId(id);

    db.SavedItem.create(savedItem, function(err, data){

        //res.redirect(req.get('referer'));
        res.json("saved Item:");

    })

    //res.end("sucess...");

});

router.get("/api/save_entity", function(req, res){

    console.log("hit /save_entity with get");

    
    db.SavedItem.find({}, function(err, data){
        
                //res.redirect(req.get('referer'));
        res.json(data);
        
    })

})

router.delete("/api/remove_entity/:id", function(req, res){
    
        console.log("hit /remove_entity with delete");
    
        console.log(req.params.id);

        const id=req.params.id;

        
        db.SavedItem.findById(id).remove(function(data){
            
            console.log(data);
            res.json(data);
            
        })
    
})

//this route gets all the saved items in a categories
router.get("/global_saved_item/:categories", function(req, res){

    const categories = req.params.categories;

    db.SavedItem.find({categories:categories}).then(function(dbSavedItem){

        //send the result as json
        res.json(dbSavedItem);

    })


}) 



module.exports = router;