import express from 'express';
import BrandController from '../controllers/brand.controller.js'
export const ProductRoute = () => {
    const router = express.Router()
    router.post('/createBrands', ProductController.createBrands)
    router.post('/updatedBrand', ProductController.updatedBrand)
    router.delete('/deleteProducts', ProductController.deleteProducts)
    return router
}
