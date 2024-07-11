import express from "express";
import crypto from 'node:crypto';
import Product from '../models/product.model'
export default class ProductController {

    async createProduct(req, res) {
        try {
            // xu li data input
            const data = req.body;
            // khoi tao 1 HMAC object 
            data.id = crypto.createHmac('sha1', 'example')
                // update object muon ma hoa
                .update('12345678')
                // ma hoa string va tra ve chuoi dang hex
                .digest('hex');
            // thuc hien them moi user
            const product = await Product.create(data);

            res.json(product);
        } catch (error) {
            res.json(error);
        }
    }
    async updateProduct(req, res) {
        try {
            const data = req.body
            const { productId } = req.params
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error('user khong ton tai');
            }
            if (product.category_id === data.category_id) {
                delete data.category_id;
            }
            if (product.id === data.id) {
                delete data.id;
            }

            console.log(product, data)
            const productUpdate = await Product.findByIdUpdate(
                category_id,
                data,
                {
                    new: true
                }
            )
            res.json(productUpdate);
        } catch (error) {
            res.json({ error })
        }
    }
    async deleteProducts(req, res) {
        Product.remove(res.params.id, (res, data) => {
            if (err) {
                if (err.kind === 'not found')
                    res.json({ message: error })
            } else {
                res.redirect(res.body.message)
            }
        })
    }

}