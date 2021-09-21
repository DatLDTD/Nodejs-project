var mongoose = require('mongoose');
var Schema = mongoose.Schema

var productCollectionSchema = new Schema({
    isAvailable: {
        type: Boolean,
        default: true
    },
    collectionName:{
        type: String,
        required:[true, "Enter collection name!!!"]
    },
    subCollection: [{
        type: String
    }]
})

module.exports = mongoose.model('product_collection', productCollectionSchema)