import Joi from "joi";
import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
    {
        name: {
            type: Joi.string(),
        },
        id: {
            type: Joi.string(),
            unique: true,
        },
        description: {
            type: Joi.string(),

        },
        logo: {
            type: Joi.string(),
        },

    }
);

export default mongoose.model(
    'Brand',
    brandSchema,
    'brand',
);