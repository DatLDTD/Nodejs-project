module.exports = function (app) {
    var productListController = require('../controller/productAPI')
    var productImgListController = require('../controller/productImgAPI')
    var productCollectionListController = require('../controller/productCollectionAPI')
    var productMaterialListController = require('../controller/productMaterialAPI')
    var productFeatureListController = require('../controller/productFeatureAPI')
    var productCategoryListController = require('../controller/productCategoryAPI')

    var billListController = require('../controller/billAPI')
    app.route('/product-suggest')
        .get(productListController.getSuggest)

    app.route('/product')
        .get(productListController.listAllProduct)
        .post(productListController.addProduct)
        .delete(productListController.deleteProduct)
    app.route('/product/:id')
        .get(productListController.getProductById)

    app.route('/product-img')
        .get(productImgListController.listAllProductImg)
        .post(productImgListController.addProductImg)

    app.route('/product-collection')
        .get(productCollectionListController.listAllProductCollection)
        .post(productCollectionListController.addProductCollection)

    app.route('/product-material')
        .get(productMaterialListController.listAllProductMaterial)
        .post(productMaterialListController.addProductMaterial)
    app.route('/product-material/:id')
        .get(productMaterialListController.getProductMaterialByID)

    app.route('/product-feature')
        .get(productFeatureListController.listAllProductFeature)
        .post(productFeatureListController.addProductFeature)

    app.route('/product-category')
        .get(productCategoryListController.listAllProductCategory)
        .post(productCategoryListController.addProductCategory)

    app.route('/bill')
        .get(billListController.listAllBill)
        .post(billListController.addBill)
    app.route('/upload-image')
        .post(productImgListController.uploadImage)
}