import Joi from "joi";
import mongoose from "mongoose";
const BOARD_COLLECTION_NAME = 'user'
const userSchema = mongoose.Schema(
    {
        name: {
            type: Joi.string(),
        },
        email: {
            type: Joi.string(),
            unique: true,
        },
        phone: {
            type: Joi.string(),

        },
        level: {
            type: Joi.string(),
            unique: true,
        },
        password: {
            type: Joi.string(),
        },
        avarta: {
            type: Joi.string(),
            get: function (avarta) {
                return '' + avarta;
            }
        },


    },
    {
        toJSON: { getters: true }
    }

);
const createNewUser = async (data) => {
    try {
        const createUser = await GET_DB().collection(BOARD_COLLECTION_NAME).insertOne(data)
        return createUser;
    } catch (error) { throw new Error(error) }

}
const findOneById = async (id) => {
    try {
        console.log(id)
        const testId = new ObjectId(id)
        console.log(testId);
        const result = await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({
            _id: new ObjectId(id)
        })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
export default mongoose.model(
    'User',
    userSchema,
    'users',

);

export const userModel = {
    createNewUser,
    findOneById
}