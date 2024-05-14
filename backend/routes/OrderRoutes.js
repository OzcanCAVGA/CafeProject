const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/OrderController")
const OrderSchema = require('../models/OrderSchema');

router
    .route("/admin/orders/view")
    .get(OrderController.getAllOrders)


router
    .route("/admin/order/view/:orderid")
    .get(OrderController.getOrder)


router
    .route("/admin/order/:tableid")
    .post(OrderController.createOrder)

router
    .route("/admin/order/:orderid")
    .delete(OrderController.deleteOrder)


router
    .route("/admin/order/vieworder/:orderid")
    .get(OrderController.viewOrderStatus)

router
    .route("/admin/order/:orderid")
    .put(OrderController.updateOrderStatus)






module.exports = router;