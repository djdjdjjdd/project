import Auth from '../models/auth.model.js'
import moment from 'moment';
//import crypto from "node:crypto";
import { hashString } from "../common/generate-token.js";
import { generateToken } from '../common/generate-token.js';
export const autherMiddleware = (req, res, next) => {

    console.log(req.header.authorization);
    if (req.headers.authorization !== 'logn') {

        return res.json('user khong co quyn truy cap');
    }
    next()


};