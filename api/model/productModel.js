var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productCategories: [{
        type: String
    }],
    productName: {
        type: String,
        required: [true, 'Enter product name!!!']
    },
    productImage: {
        type: Schema.Types.ObjectId,
        ref: 'product_img'
    },
    productPrice: {
        type: String,
        required: [true, 'Enter product price!!!']
    },
    productQuantity: {
        type: String
    },
    productMaterial: [{
        type: Schema.Types.ObjectId,
        ref: 'product_material'
    }],
    productDescrible: {
        type: String
    },
    productCollection: {
        type: String,
        required: [true, 'Enter product collection!!!']
    },
    productSubCollection: {
        type: String,
        required: [true, 'Enter product collection!!!']
    },
    productFeatures: [{
        type: String
    }],
    productTechnicalData: Object,
    productSale: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('product', productSchema);
