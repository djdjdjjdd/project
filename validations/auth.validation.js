const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const authValidation = (req, res, next) => {
    const register = {
        body: Joi.object().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required().custom(password),
            name: Joi.string().required()
        }),
    };

    const login = {
        body: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().required(),
        }),
    };

    const logout = {
        body: Joi.object().keys({
            refreshToken: Joi.string().required()
        })
    };

    const refreshTokens = {
        body: Joi.object().keys({
            refreshToken: Joi.string().required(),
        }),
    };

    const forgotPassword = {
        body: Joi.object().keys({
            email: Joi.string().email().required(),
        }),
    };

    const resetPassword = {
        query: Joi.object().keys({
            token: Joi.string().required(),
        }),
        body: Joi.object().keys({
            password: Joi.string().required().custom(password),
        }),
    };

    const verifyEmail = {
        query: Joi.object().keys({
            token: Joi.string().required(),
        }),
    };

    try {
        // correctCondition.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        const errorMessage = new Error(error).message;
        const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage);
        next(customError);
    }
};



module.exports = {
    register,
    login,
    logout,
    refreshTokens,
    forgotPassword,
    resetPassword,
    verifyEmail,
}