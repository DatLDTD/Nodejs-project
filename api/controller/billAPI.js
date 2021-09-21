var Bill = require('../model/BillModel')

exports.addBill = async function (req, res) {
    let newBill = new Bill(req.body)
    newBill.save((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

exports.listAllBill = async function (req, res) {
    Bill.find({ isAvailable: true }).exec((err, data) => {
        if (err) res.send(err)
        res.json(data)
    })
}

