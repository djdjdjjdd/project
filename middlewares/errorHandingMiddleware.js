import { StatusCodes } from 'http-status-codes'
export const errorHandingMiddleware = (req, res, next) => {
    if (!err.statusCodes) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR

    const responseError = {
        statusCode: err.statusCode,
        message: err.message || StatusCodes[err.statusCode],
        stack: err.stack
    }
    console.log(responseError)
    res.status(responseError.statusCode).json(responseError)
}

