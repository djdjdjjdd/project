import express from "express";
import crypto from 'node:crypto';
import Brand from '../models/brand.model.js'
export default class BrandController {

    async createBrands(req, res) {
        try {
            // xu li data input
            const { name, description } = req.body;
            // khoi tao 1 HMAC object 
            const newBrand = new Category({
                name,
                description
            });
            const savedBrand = await newBrand.save();

            res.status(201).json(savedBrand)
        } catch (error) {
            res.json(error);
        }
    }
    async updatedBrand(req, res) {
        try {
            const brandId = req.params.id;
            const { name, description } = req.body;

            const brand = await Brand.findById(brandId);


            brand.name = name;
            brand.description = description;

            if (!brand) {
                return res.status(404).json({ error: 'Danh mục không tồn tại.' });
            }

            const updatedBrand = await brand.save();
            res.json(updatedBrand);

        } catch (error) {
            res.json({ error })
        }
    }


}