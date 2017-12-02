const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");
const User = mongoose.model('usersGoogle');
const router = express.Router();

//this route is hit when user wants to save items and returns as json array of saveItems; it is hit when user clicked add inside the modal;
router.post("/api/save_entity/:id", function(req, res){

    console.log("hit /save_entity with post");

    const entity = req.body;

    const userId = req.params.id;

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

    db.SavedItem.create(savedItem).then(function(data){

        User.findOneAndUpdate({ googleId: userId}, { $push: { savedItem: data._id } }, { new: true }).then(function(doc){

            User.findOne({googleId: userId}).populate("savedItem").then(function(data){

                res.json(data.savedItem);
                
            })

        })

    }).catch(err => console.log(err));

});

//this route gets all the items a user saved and return as json
router.get("/api/save_entity/:id", function(req, res){

    console.log("hit /save_entity with get");

    const userId = req.params.id;

    User.findOne({googleId: userId}).populate("savedItem").then(function(data){
        
            //console.log(data.savedItem);
            res.json(data.savedItem);
        
    })

})

//this route returns the user's name
router.get("/api/name/:id", function(req, res){

    console.log("hit name");

    const userId = req.params.id;

    User.findOne({googleId: userId}).then(function(data){
        
            //res.render("save", {data: data});
            //console.log(data.displayName);
            res.json(data.displayName);
        
    })


})

//this route remove a bookmarked item; and returns a json represented array of all remaining savedItems a user has.
router.delete("/api/remove_entity/:id", function(req, res){
    
        console.log("hit /remove_entity with delete");
    
        //console.log(req.params.id.split("&"));
        
        const id=req.params.id.split("&")[0];
        const userId=req.params.id.split("&")[1];
        
        db.SavedItem.findByIdAndRemove(id).then(function(){
            
            //User.findOneAndUpdate({googleId: userId}, { $pull: { savedItem: objId } }, { new: true }).populate("savedItem").then(function(data){
                
            console.log("inside findoneand update");

            User.findOne({googleId: userId}).populate("savedItem").then(function(data){
                        
                            //res.render("save", {data: data});
                            //console.log(data);
                res.json(data.savedItem);
                        
            })
           
        }).catch(err => console.log(err));
    
})

//this route increment add of a particular bookmark referenced by id and userId
router.post("/api/like/:id", function(req, res){

    console.log(req.params.id.split("&"));
    
    const id=req.params.id.split("&")[0];
    const userId=req.params.id.split("&")[1];

    db.SavedItem.findOneAndUpdate({ _id: id}, { $inc: { like: 1 } }, { new: true }).then(function(doc){
        
        User.findOne({googleId: userId}).populate("savedItem").then(function(data){
                        
                            //res.render("save", {data: data});
            console.log(data.savedItem);
            res.json(data.savedItem);
                        
        })
        
    }).catch(err => console.log(err));

})

//this route increment dislike by 1
router.post("/api/dislike/:id", function(req, res){
    
    //console.log(req.params.id.split("&"));
        
    const id=req.params.id.split("&")[0];
    const userId=req.params.id.split("&")[1];
    
    
    db.SavedItem.findOneAndUpdate({ _id: id}, { $inc: { dislike: 1 } }, { new: true }).then(function(doc){
            
                        //console.log(doc);
                        //res.json(doc);
            
        User.findOne({googleId: userId}).populate("savedItem").then(function(data){
                            
                                //res.render("save", {data: data});
                                //console.log(data.savedItem);
            res.json(data.savedItem);
                            
        })
            
    }).catch(err => console.log(err));
    
})

//this route gets all the saved items in a categories
router.get("/api/global_saved_item/:categories", function(req, res){

    const categories = req.params.categories;

    db.SavedItem.find({categories:categories}).then(function(dbSavedItem){

        //send the result as json
        res.json(dbSavedItem);

    })


}) 



module.exports = router;