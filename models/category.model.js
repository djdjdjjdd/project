import Joi from "joi";
import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
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
        image: {
            type: Joi.number(),
        },

    }
);

export default mongoose.model(
    'Category',
    categorySchema,
    'category',
);