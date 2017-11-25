const mongoose = require("mongoose");

const { Schema } = mongoose;

var UserSchema = new Schema({

    googleId: {
        
        type: String,
    },
    displayName: {
        
        type: String,

    },
    email: {
        
        type: Object,

    },
    photo:  {
        
        type: Object,

    },
    user_created_categories: {
        
        type: Array,
        
    },
    savedItem: [{
        
        type: Schema.Types.ObjectId,
        ref: 'SavedItem'
        
    }]

});

mongoose.model("usersGoogle", UserSchema);

/*
var UserSchema = new Schema({

    id: {

        type: String,

    },
    user_name: {

        type: String,

    },
    display_name: {

        type: String,

    },
    profileURL: {
        
        type: String,
        
    },
    photo: {
        
        type: String,
        
    },
    user_created_categories: {

        type: Array,

    },
    savedItem: [{

        type: Schema.Types.ObjectId,
        ref: 'SavedItem'

    }]

});

var User = mongoose.model("User", UserSchema);

module.exports = User;
*/