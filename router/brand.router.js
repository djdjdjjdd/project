import express from 'express';
import BrandController from '../controllers/brand.controller.js'
export const BrandRoute = () => {
    const router = express.Router()
    router.post('/createBrands', BrandController.createBrands)
    router.post('/updatedBrand', BrandController.updatedBrand)
    return router
}
