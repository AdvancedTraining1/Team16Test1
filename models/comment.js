/**
 * Created by mengchi on 14-10-17.
 */
var RecipeSchema = new Schema({
    author: {
        id: ObjectId,
        account: String },
    time: { type: Date, default: Date.now },
    content: String,
    replyid: { type: ObjectId }
});
module.export = RecipeSchema