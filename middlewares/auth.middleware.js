
import passport from 'passport';
import httpStatus from 'http-status';

export const authMiddleware = (...required) => async (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function (id, done) {
            User.findById(id, function (err, user) {
                done(err, user);
            });
        })
            .then(() => next())
            .catch((err) => next(err))
    })
}
