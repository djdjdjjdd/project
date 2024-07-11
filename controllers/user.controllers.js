import User from '../validations/auth.validation.js'
import Bcrypt from 'bcrypt'
import httpStatus from 'http-status';
export default class UserControllers {
    async login(req, res) {
        const { email, password } = req.body;
        if (email && password) {
            try {
                const user = await User.findByEmail(email);
                if (!user) {
                    res.json({ error: 'User not found' });
                } else {
                    const result = await Bcrypt.compare(password, user.password);
                    if (result) {
                        req.session.loggedin = true;
                        req.session.user = user;
                    } else {
                        res.render('controllers/login', { email, password });
                    }
                }
            } catch (err) {
                res.status(500).send('Internal Server Error');
            }
        } else {
            res.json({ error: 'Missing email or password' });
        }
    }
    async logout(req, res) {
        try {
            await new Promise((resolve, reject) => {
                req.session.destroy((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            res.redirect('/');
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
}