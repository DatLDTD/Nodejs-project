var ProductCategory = require('../model/productCategoryModel')

exports.addProductCategory= async function (req, res) {
    let newProductCategory = await new ProductCategory(req.body)
    newProductCategory.save((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.listAllProductCategory= async function (req, res) {
    ProductCategory.find({ isAvailable: true }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}
