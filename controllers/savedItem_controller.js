const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");
const User = mongoose.model('usersGoogle');
const router = express.Router();

//this route is hit when user wants to save items (link/text)
router.post("/api/save_entity/:id", function(req, res){

    console.log("hit /save_entity with post");

    //entity is a palce holder for data that user wants to save
    const entity = req.body;

    const userId = req.params.id;

    console.log(userId);

    console.log(entity);

    console.log(Date.now());

    const {title, link, categories, description} = entity.item;

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

    db.SavedItem.create(savedItem).then(function(data){

        //res.redirect(req.get('referer'));
        //res.json("saved Item:");

        console.log(data);

        User.findOneAndUpdate({ googleId: userId}, { $push: { savedItem: data._id } }, { new: true }).then(function(doc){

            //console.log(doc);
            //res.json(doc);

            User.findOne({googleId: userId}).populate("savedItem").then(function(data){
                
                    //res.render("save", {data: data});
                    console.log(data.savedItem);
                    res.json(data.savedItem);
                
            })

        })

    }).catch(err => console.log(err));

    //res.end("sucess...");

});

router.get("/api/save_entity/:id", function(req, res){

    console.log("hit /save_entity with get");

    const userId = req.params.id;

    console.log(userId);

    //var objID = mongoose.Types.ObjectId(userId);

    //console.log(objID);

    User.findOne({googleId: userId}).populate("savedItem").then(function(data){
        
            //res.render("save", {data: data});
            console.log(data.savedItem);
            res.json(data.savedItem);
        
    })



})

router.get("/api/name/:id", function(req, res){

    console.log("hit name");

    const userId = req.params.id;

    User.findOne({googleId: userId}).then(function(data){
        
            //res.render("save", {data: data});
            console.log(data.displayName);
            res.json(data.displayName);
        
    })


})


router.delete("/api/remove_entity/:id", function(req, res){
    
        console.log("hit /remove_entity with delete");
    
        console.log(req.params.id);

        const id=req.params.id;

        var ObjId = mongoose.Types.ObjectId(id);
        
        db.SavedItem.findByIdAndRemove(id).then(function(){
            
            User.findOneAndUpdate({googleId: userId}, { $pull: { savedItem: ObjId } }, { new: true }).populate("savedItem").then(function(data){
                
                    //res.render("save", {data: data});
                    User.findOne({googleId: userId}).populate("savedItem").then(function(data){
                        
                            //res.render("save", {data: data});
                            console.log(data.savedItem);
                            res.json(data.savedItem);
                        
                    })
        
                
            })

            //console.log(data);
            //res.json(data);
            
        }).catch(err => console.log(err));
    
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