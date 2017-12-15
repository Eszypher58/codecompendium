const mongoose = require("mongoose");
const db = require("./../models");
const express = require("express");
const User = mongoose.model('usersGoogle');
const metafetch = require("metafetch");
const metaget = require("metaget");
const router = express.Router();

//this route is hit when user wants to save items and returns as json array of saveItems; it is hit when user clicked add inside the modal;
router.post("/api/save_entity/:id", function(req, res){

    console.log("hit /save_entity with post");

    const entity = req.body;

    const userId = req.params.id;

    const {title, link, categories, description} = entity.item;

    let metaImg = "";

    metaget.fetch(link, (err, meta_res) => {

        console.log(meta_res);


    if (meta_res["og:image"]){

        metaImg = meta_res["og:image"];

    };

    //the data from front end is saved into this object, to be placed into mongodb
    let savedItem = {

                title: title,
                link: link,
                categories: categories,
                description: description,
                meta_tag_link: metaImg,
                time_stamp: Date.now(),
                like: 0,
                dislike: 0,
                userId: userId,

            }

            db.SavedItem.create(savedItem).then(function(data){

                User.findOneAndUpdate({ googleId: userId}, { $push: { savedItem: data._id } }, { new: true }).then(function(doc){

                    User.findOne({googleId: userId}).populate("savedItem").then(function(data){

                        res.json(data.savedItem);

                    })

                })

            }).catch(err => console.log(err));


    })



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

//this route gets all the items a user saved and return the count of each category as json
router.get("/api/save_entity_count/:id", function(req, res){

    console.log("hit /save_entity_count with get");

    const userId = req.params.id;

    console.log(userId);


    db.SavedItem.find({userId: userId}).then(function(data){

        
            //console.log("****save_entity_count***");
            //console.log(data);
            //console.log(("****END of save_entity_count***"));


            let countObj = {

               HTML: 0,
               CSS: 0,
               JAVASCRIPT: 0,
               JQUERY: 0,
               REACT: 0,
               NODEJS: 0,
               DATABASES: 0,
               NPM: 0,
               API: 0,
               ANGULAR: 0,
               RUBY: 0,
               FRAMEWORKS: 0,
               MISC: 0,
               DESIGN: 0,
               CPP: 0,
               PYTHON: 0,
               JOBS: 0,
               HUMOR: 0,

            }

            for (let i = 0; i < data.length; i++) {

                const category = data[i].categories.toUpperCase();

                switch (category) {

                    case "HTML":
                        countObj.HTML += 1;
                        break;
                    case "CSS":
                        countObj.CSS += 1;
                        break;
                    case "JAVASCRIPT":
                        countObj.JAVASCRIPT += 1;
                        break;
                    case "JQUERY":
                        countObj.JQUERY += 1;
                        break;
                    case "REACT":
                        countObj.REACT += 1;
                        break;
                    case "NODEJS":
                        countObj.NODEJS += 1;
                        break;
                    case "DATABASES":
                        countObj.DATABASES += 1;
                        break;
                    case "NPM":
                        countObj.NPM += 1;
                        break;
                    case "API":
                        countObj.API += 1;
                        break;
                    case "ANGULAR":
                        countObj.ANGULAR += 1;
                        break;
                    case "RUBY":
                        countObj.RUBY += 1;
                        break;
                    case "FRAMEWORKS":
                        countObj.FRAMEWORKS += 1;
                        break;
                    case "MISC":
                        countObj.MISC += 1;
                        break;
                    case "DESIGN":
                        countObj.DESIGN += 1;
                        break;
                    case "CPP":
                        countObj.CPP += 1;
                        break;
                    case "PYTHON":
                        countObj.PYTHON += 1;
                        break;
                    case "JOBS":
                        countObj.JOBS += 1;
                        break;
                    case "HUMOR":
                        countObj.HUMOR += 1;
                        break;
                }




            }

            res.json(countObj);

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

//this route increment like of a particular bookmark referenced by id and userId
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

//this route increment dislike of a particular bookmark referenced by id and userId
router.post("/api/dislike/:id", function(req, res){

    console.log("hit dislike route");

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
    console.log('dbsaved: ', req.params.categories);

    db.SavedItem.find({categories:categories}).then(function(dbSavedItem){
        //send the result as json
        res.send(dbSavedItem);

    })


})



module.exports = router;
