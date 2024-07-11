import express from 'express';
import CategoryController from '../controllers/category.controller.js'
export const CategoryRoute = () => {
    const router = express.Router()
    router.post('/createBrands', CategoryController.createCategory)
    router.post('/updateProduct', CategoryController.updateProduct)
    return router
}
