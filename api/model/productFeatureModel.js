var mongoose = require('mongoose');
var Schema = mongoose.Schema

var productFeatureSchema = new Schema({
    isAvailable: {
        type: Boolean,
        default: true
    },
    featureName: {
        type: String,
        required: [true, "Enter collection name!!!"]
    },
    featureDescrible: {
        type: String
    }
})

module.exports = mongoose.model('product_feature', productFeatureSchema)