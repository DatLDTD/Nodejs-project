var ProductFeature = require('../model/productFeatureModel')

exports.addProductFeature = async function (req, res) {
    let newProductFeature = await new ProductFeature(req.body)
    newProductFeature.save((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.listAllProductFeature= async function (req, res) {
    ProductFeature.find({ isAvailable: true }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

