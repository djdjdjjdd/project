import express, { query } from 'express';
import { router } from "./router/index.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { CONNECT_DB, GET_DB } from './config/mongodb.js';
import { errorHandingMiddleware } from './middlewares/errorHandingMiddleware.js'
dotenv.config()
const app = express();
app.use(router)
app.use(errorHandingMiddleware)
app.use(express.json());
app.get('/test', (req, res, next) => {
    console.log(1);
    next()
})
app.use((req, res, next) => {
    console.log('loging...');
    next()
})
app.post('/post', (req, res) => {
    res.json({
        body: req.body,
        query: req.query
    })
})
app.use(express.json())

const books = [{
    id: 1,
    name: 'product',
    author: 'ABC'
},
{
    id: 2,
    name: 'CHAIR',
    author: 'DEF'
}
]
app.post('/login', (req, res) => {
    const data = req.body;
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s', });
    res.json({ accessToken });
    console.log({ data })
})
app.get('/books', authenToken, (req, res) => {
    res.json({ status: 'Succes', data: books })
});

function authenToken(req, res, next) {
    const authorizationHeader = req.headers['authorization']
    const token = authorizationHeader.split(' ')[1]
    if (!token) res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        console.log(err, data)
    });
}

CONNECT_DB()
    .then(() => console.log('connect to mongodb'))
    .catch(err => {
        console.error(err)
        process.exit(0)
    })
app.get('/post/:id/:name', (req, res) => { res.json(req.params) })
app.listen(3000, () => { console.log('server listening on 3s000') })