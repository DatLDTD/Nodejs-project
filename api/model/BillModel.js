var mongoose = require('mongoose');
var Schema = mongoose.Schema
var billSchema = new Schema({
    isAvailable: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        required: [true, "Enter category name!!!"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Enter category name!!!"]
    },
    address: {
        type: String,
        required: [true, "Enter category name!!!"]
    },
    total: {
        type: String,
        required: [true, "Enter category name!!!"]
    },
    listItem: [
        {}
    ],
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('bill', billSchema)