import jwt from 'jsonwebtoken';

export const AuthController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token; // Sửa thành headers.token
        if (token) {
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => { // Sửa thành process.env.JWT_SECRET
                if (err) {
                    res.status(403).json('Token đã hết hạn');
                } else {
                    req.user = user;
                    next();
                }
            });
        } else {
            res.status(401).json('Bạn chưa xác thực');
        }
    },
    verifyTokenAndAdminAuth: (req, res, next) => {
        AuthController.verifyToken(req, res, () => {
            if (req.user.id === req.params.id || req.user.admin) { // Sửa thành ===
                next();
            } else {
                res.status(403).json('Bạn không được phép truy cập');
            }
        });
    },
};