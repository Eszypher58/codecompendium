var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SavedItemSchema = new Schema({

    title: {

        type: String,
        required: true,

    },
    link: {

        type: String,

    },
    categories: {

        type: String,

    },
    description: {

        type: String,

    },
    meta_tag_link: {

        type: String,
        
    },
    time_stamp: {

        type: String,

    },
    like: {

        type: Number,

    },
    dislike: {

        type: Number,

    },
    userId: {

        type: String,

    }
});

var SavedItem = mongoose.model("SavedItem", SavedItemSchema);

module.exports = SavedItem;