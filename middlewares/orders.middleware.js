import Joi from 'joi'
export default function OdersMiddleware(req, res, next) {
    const data = req.body;
    const schema = Joi.object({
        id: Joi.string().max(255).required().message({
            'string.base': 'id phai la 1 chuoi',
            'string.max': 'ten khong duoc lon hon{{#limit}} ki tu ',
            'any.required': 'ten khong duoc de trong'
        }),
        user_id: Joi.string().max(11).min(9).required().message({
            'string.base': 'ten phai la 1 chuoi',
            'string.max': 'ten khong duoc lon hon{{#limit}} ki tu ',
            'string.min': 'ten khong duoc nho hon{{#limit}} ki tu ',
            'any.required': 'ten khong duoc de trong'
        }),
        note: Joi.string().max(11).min(9).required().message({
            'string.base': 'ten phai la 1 chuoi',
            'string.max': 'ten khong duoc lon hon{{#limit}} ki tu ',
            'string.min': 'ten khong duoc nho hon{{#limit}} ki tu ',
            'any.required': 'gender khong duoc de trong'
        }),
        total_price: Joi.number().valid(1, 2).required().message({
            'number.base': 'gender phai la  1 so',
            'any.only': 'gender khong hop le',
            'any.required': 'lever khong duoc chung'
        }),
        status: Joi.string().valid(1, 2).required().messages({
            'number.base': 'Level phai la 1 so',
            'any.only': 'Level khong hop le',
            'any.required': 'Level khong duoc de trong'
        }),
    })
    const result = schema.validate(data);
    if (result.error) {
        return res.status(422).json(result.error.details);
    }
    next();
}