import Joi from "joi";
import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: Joi.string(),
        },
        id: {
            type: Joi.string(),
            unique: true,
        },
        prices: {
            type: Joi.number(),

        },
        discount: {
            type: Joi.number(),
        },
        category_id: {
            type: Joi.string(),
        },
        brand_id: {
            type: Joi.string(),
        }
    }
);

export default mongoose.model(
    'Product',
    productSchema,
    'product',
);