var mongoose = require('mongoose');
var Schema = mongoose.Schema
var productCategorySchema = new Schema({
    isAvailable: {
        type: Boolean,
        default: true
    },
    categoryName: {
        type: String,
        required: [true, "Enter category name!!!"]
    },
    categoryDescrible: {
        type: String
    }
})

module.exports = mongoose.model('product_category', productCategorySchema)