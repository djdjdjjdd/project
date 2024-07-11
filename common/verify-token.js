import JWT from 'jsonwebtoken';

export const verifyToken = async (token, secretSignature) => {
    try {
        return JWT.verify(token, secretSignature)
    } catch (error) {
        throw new Error(error)
    }
}