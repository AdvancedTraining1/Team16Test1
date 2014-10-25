/**
 * Created by mengchi on 14-10-17.
 */

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: { type: String, index: true },
    account: { type: String, unique: true },
    password: { type: String },
    type: { type: Number },
    phone: { type: String, unique: true },
    sex: { type: Number },
    head:{ type:String },
    friends: {
        id: ObjectId,
        account : String
    },
    fans:{
        id: ObjectId,
        account : String
    },

    recipe_count: { type: Number, default: 0 },
    topic_count: { type: Number, default: 0 },
    blog_count: { type: Number, default: 0 },
    comment_count: { type: Number, default: 0 },
    friends_count: { type: Number, default: 0 },
    fans_count: { type: Number, default: 0 }
});

module.exports = UserSchema;