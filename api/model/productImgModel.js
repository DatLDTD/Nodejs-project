var mongoose = require('mongoose');
var Schema = mongoose.Schema

var productImgSchema = new Schema({
    isAvailable: {
        type: Boolean,
        default: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    Images: Object
})

module.exports = mongoose.model('product_img', productImgSchema)