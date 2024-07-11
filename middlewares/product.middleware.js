import Joi from "joi";
export default function ProductMiddleware(req, res, next) {
    const data = req.body;
    const schema = Joi.body({
        name: Joi.string().max(255).required().message({
            'string.base': 'ten phai la 1 chuoi',
            'string.max': 'ten khong duoc lon hon{{#limit}} ki tu ',
            'any.required': 'ten khong duoc de trong'
        }),
        id: Joi.number().max(10).min(9).required().message({
            'number.base': 'id phai la 1 so',
            'string.max': 'id khong duoc lon hon{{#limit}} so',
            'string.min': 'id khong duoc nho hon{{#limit}} so',
            'any.required': 'id khong duoc de trong',
        }),
        prices: Joi.number().max(10).min(9).optional().message({
            'number.base': 'id phai la 1 so',
            'string.max': 'id khong duoc lon hon{{#limit}} so',
            'string.min': 'id khong duoc nho hon{{#limit}} so',
            'any.required': 'id khong duoc de trong',
        }),
        discount: Joi.number().max(100).min(0).required().message({
            'number.base': 'id phai la 1 so',
            'string.max': 'id khong duoc lon hon{{#limit}} so',
            'string.min': 'id khong duoc nho hon{{#limit}} so',
            'any.required': 'id khong duoc de trong',
        }),
        category_id: Joi.number().max(10).min(9).required().message({
            'number.base': 'id phai la 1 so',
            'string.max': 'id khong duoc lon hon{{#limit}} so',
            'string.min': 'id khong duoc nho hon{{#limit}} so',
            'any.required': 'id khong duoc de trong',
        }),
        brand_id: Joi.number().max(10).min(9).required().message({
            'number.base': 'id phai la 1 so',
            'string.max': 'id khong duoc lon hon{{#limit}} so',
            'string.min': 'id khong duoc nho hon{{#limit}} so',
            'any.required': 'id khong duoc de trong',
        }),
    })

    const result = schema.validate(data);
    if (result.error) {
        return res.status(422).json(result.error.details);
    }
    next();

}