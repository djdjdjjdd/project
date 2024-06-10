export const autherMiddleware = (req, res, next) => {
    console.log(req.header.authorization);
    if (req.headers.authorization !== 'logn') {

        return res.json('user khong co quyn truy cap');
    }
    next()
}

