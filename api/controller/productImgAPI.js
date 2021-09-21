var ProductImg = require('../model/productImgModel')

exports.addProductImg = async function (req, res) {
    let newProductImg = await new ProductImg(req.body)
    newProductImg.save((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.listAllProductImg = async function (req, res) {
    ProductImg.find({ isAvailable: true }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.uploadImage = function (req, res) {
    console.log({ body: req.body })
    console.log({ files: req.files })
    console.log(req.files.upload)
    let path = './public/images/productImages' + "/" + req.files.upload.name;
    req.files.upload.mv(path, (err) => {
        if (err) {
            res.status(404).send(err)
        } else
            res.status(200).json({ url: path });
    });
};