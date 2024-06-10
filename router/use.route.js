import express from 'express';
import { autherMiddleware } from '../middlewares/auther.middleware.js'
export const usersRoute = (app) => {
    const router = express.Router();
    router.use(authMiddleware)
    router.post('/', (req, res, next) => {
        console.log(typeof req);
        next();
    }, (req, res) => {
        res.json('create users api')
    });

    router.get('/', (req, res) => {
        res.json('get users api')
    });

    app.use('/user', router)
}