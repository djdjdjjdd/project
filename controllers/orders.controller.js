import crypto from 'node:crypto';
import Order from '../models/orders.model.js';
//import Product from '../models/product.model';

export default class OrdersController {
    async createOrders(req, res) {
        try {
            const { id, userId } = req.body;
            const newOrder = new Order({
                id,
                userId
            });
            const savedOrder = await newOrder.save();

            res.status(201).json(savedOrder);
        } catch (error) {
            res.json(error);
        }
    }

    async updateOrders(req, res) {
        try {
            const data = req.body;
            const { orderId } = req.params;

            const order = await Order.findById(orderId);
            if (!order) {
                throw new Error('Sản phẩm không tồn tại');
            }

            if (order.users_id === data.users_id) {
                delete data.users_id;
            }
            //   if (product.id === data.id) {
            //     delete data.id;
            //   }

            console.log(order, data);
            const ordersUpdate = await Order.findByIdAndUpdate(
                users_id,
                data,
                {
                    new: true
                }
            );

            res.json(ordersUpdate);
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}