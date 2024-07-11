import express from "express";
import crypto from 'node:crypto';
import Category from '../models/category.model.js'
export default class CategoryController {

    async createCategory(req, res) {
        try {
            // xu li data input
            const { name, description } = req.body;
            // khoi tao 1 HMAC object 
            const newCategory = new Category({
                name,
                description
            });
            const savedCategory = await newCategory.save();

            res.status(201).json(savedCategory)
        } catch (error) {
            res.json(error);
        }
    }
    async updateProduct(req, res) {
        try {
            const categoryId = req.params.id;
            const { name, description } = req.body;

            const category = await Category.findById(categoryId);


            category.name = name;
            category.description = description;

            if (!category) {
                return res.status(404).json({ error: 'Danh mục không tồn tại.' });
            }

            const updatedCategory = await category.save();
            res.json(updatedCategory);

        } catch (error) {
            res.json({ error })
        }
    }


}