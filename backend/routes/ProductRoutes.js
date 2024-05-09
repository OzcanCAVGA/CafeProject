var express = require('express');
var router = express.Router();
const productSchema = require('../models/ProductSchema');
var productController = require('../controllers/ProductController');


router
    .route("/admin/products/addproduct")
    .post(productController.addProduct);

router
    .route("/admin/products/:productid")
    .put(productController.updateProduct)

router
    .route("/admin/products/:productid")
    .delete(productController.deleteProduct)

router
    .route("/admin/products/searchProducts")
    .get(productController.searchProducts)

router
    .route("/admin/products/:productid")
    .get(productController.getProductById)

router
    .route("/admin/products/getProducts")
    .get(productController.getProducts)


module.exports = router;