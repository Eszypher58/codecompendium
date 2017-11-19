var mongoose = require("mongoose");

var Schema = mongoose.Schema;

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