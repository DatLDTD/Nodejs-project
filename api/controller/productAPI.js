var Product = require('../model/productModel')
var ProductImg = require('../model/productImgModel')

exports.addProduct = async function (req, res) {
    let newProduct = await new Product();
    newProduct.productName = req.body.productName
    newProduct.productQuantity = req.body.productQuantity
    newProduct.productPrice = req.body.productPrice
    newProduct.productSale = req.body.productSale
    newProduct.productDescrible = req.body.productDescrible
    newProduct.productCollection = req.body.productCollection
    newProduct.productSubCollection = req.body.productSubCollection
    newProduct.productTechnicalData = req.body.productTechnicalData
    newProduct.productFeatures = req.body.productFeatures
    newProduct.productMaterial = req.body.productMaterial
    newProduct.productCategories = req.body.productCategories

    let newProductImg = await new ProductImg()
    newProductImg.Images = req.body.productImage

    var productImgId
    var productId

    await newProductImg.save(async (err, data) => {
        if (err) res.send(err)
        productImgId = await data._id
        newProduct.productImage = await productImgId
        await newProduct.save(async (err, data) => {
            if (err) res.send(err)
            productId = data._id
            newProductImg.productId = productId
            await ProductImg.findByIdAndUpdate(productImgId, { productId: productId }).exec((err, data) => {
                if (err) res.send(err)
            })
        })
        res.json(newProduct)
    })

}

exports.listAllProduct = async function (req, res) {
    let limit = parseInt(req.query.limit)
    let pageIndex = parseInt(req.query.pageindex)
    let skip = parseInt(limit * (pageIndex - 1))
    let listproduct = await Product.find({ isAvailable: true })
    let totalPage = Math.ceil(listproduct.length / limit)
    let totalProduct = listproduct.length
    
    Product.find({ isAvailable: true }).limit(limit).skip(skip).populate("productImage","Images").exec((err, data) => {
        if (err) res.send(err)
        res.json({ totalPage, totalProduct, data })
    })
}

exports.getProductById = async function (req, res) {
    Product.find({ isAvailable: true, _id: req.params.id }).populate("productImage", "Images").exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.getSuggest = async function (req, res) {
    let collection = req.query.collection
    Product.find({ isAvailable: true, productCollection: collection }).skip(1).limit(10).populate("productImage", "Images").exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.deleteProduct = async function (req, res) {
    Product.findByIdAndUpdate({ _id: req.query._id }, { isAvailable: false }).exec((err, data) => {
        if (err) res.send(err);
        res.json(data)
    });;
}
