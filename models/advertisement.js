/**
 * Created by mengchi on 14-10-17.
 */
var AdvertisementSchema = new Schema({
    author: {
        id: ObjectId,
        account: String },
    description:{ type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    link:{ type: String }


});

module.export = AdvertisementSchema;