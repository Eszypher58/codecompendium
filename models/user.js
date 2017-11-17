var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    user_name: {

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