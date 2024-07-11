import express from 'express';
import OrdersController from '../controllers/orders.controller.js'
export const OrdersRoute = () => {
    const router = express.Router()
    router.post('/createOrders', OrdersController.createOrders)
    router.post('/updateOrders', OrdersController.updateOrders)
    return router
}
