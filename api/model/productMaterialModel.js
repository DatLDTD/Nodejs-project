var mongoose = require('mongoose');
var Schema = mongoose.Schema

var productMaterialSchema = new Schema({
    isAvailable: {
        type: Boolean,
        default: true
    },
    materialName:{
        type: String,
        required:[true, "Enter material name!!!"]
    },
    materialDescrible: {
        type: String
    },
    materialImage:{
        type: String
    }
})

module.exports = mongoose.model('product_material', productMaterialSchema)