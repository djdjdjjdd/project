import Joi from "joi";
export default function BrandsMiddleware(req, res, next) {
    const data = req.body;
    const schema = Joi.body({
        id: Joi.number().min(9).max(11).required().message({
            'string.base': 'Id phai la 1 chuoi',
            'string.max': 'id khong duoc lon hon{{#limit}} ki tu ',
            'any.required': 'ten khong duoc de trong'
        }),
        name: Joi.string().max(255).required().message({
            'string.base': 'ten phai la 1 chuoi',
            'string.max': 'ten khong duoc lon hon{{#limit}} ki tu ',
            'any.required': 'ten khong duoc de trong'
        }),
        description: Joi.text().max(255).required().message({
            'string.base': 'ten phai la 1 chuoi',
            'string.max': 'ten khong duoc lon hon{{#limit}} ki tu ',
            'any.required': 'ten khong duoc de trong'
        }),
        logo: Joi.string().max(255).required().message({
            'string.base': 'anh phai la 1 chuoi',
            'string.max': 'anh khong duoc lon hon{{#limit}} ki tu ',
            'any.required': 'anh khong duoc de trong'
        }),
    })
    const result = schema.validate(data);
    if (result.error) {
        return res.status(422).json(result.error.details);
    }
    next();
}