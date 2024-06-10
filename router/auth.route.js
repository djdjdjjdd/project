import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js';
//import { authValidation } from '../validations/auth.validation.js'

export const authRoute = (router) => {
    router.use('/auth', authMiddleware);
    router.post('/register', authValidation.register);
    router.post('/login', authValidation.login, validate);
    router.post('/logout', authValidation.logout, validate);
    router.post('/refresh-tokens', authValidation.refreshTokens);
    router.post('/forgot-password', authValidation.forgotPassword);
    router.post('/reset-password', authValidation.resetPassword);
    router.post('/send-verification-email', authValidation.sendVerificationEmail);
    router.post('/verify-email', authValidation.verifyEmail, authController.verifyEmail);
};