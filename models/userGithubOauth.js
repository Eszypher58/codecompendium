const mongoose = require("mongoose");

const { Schema } = mongoose;

var UserGithubSchema = new Schema({
    
        githubId: {
    
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

mongoose.model("usersGithub", UserGithubSchema);