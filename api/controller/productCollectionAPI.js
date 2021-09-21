var ProductCollection = require('../model/productCollectionModel')

exports.addProductCollection = async function (req, res) {
    let newProductCollection = await new ProductCollection(req.body)
    newProductCollection.save((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.listAllProductCollection = async function (req, res) {
    ProductCollection.find({ isAvailable: true }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}
