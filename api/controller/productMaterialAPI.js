var ProductMaterial = require('../model/productMaterialModel')

exports.addProductMaterial = async function (req, res) {
    let newProductMaterial = await new ProductMaterial(req.body)
    newProductMaterial.save((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.listAllProductMaterial = async function (req, res) {
    ProductMaterial.find({ isAvailable: true }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.getProductMaterialByID = async function (req, res) {
    ProductMaterial.find({ isAvailable: true, _id:req.params.id }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}
