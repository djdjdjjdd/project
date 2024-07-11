import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
//import { authValidation } from '../validations/auth.validation.js'
import UserControllers from '../controllers/user.controllers.js';

export const authRoute = () => {
    const router = express.Router();

    // Thêm các tuyến đường và xử lý tương ứng
    router.post('/login', UserControllers.login);
    router.post('/logout', UserControllers.logout);
    //router.get('/profile', authMiddleware, UserControllers.getProfile);

    return router;
};