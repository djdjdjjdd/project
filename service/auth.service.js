import { userModel } from "../models/auth.model"
export const createtNew = async () => {
    try {

        const getNewUser = await userModel.findOneById(createNew.insertId)
        return getNewUser
    } catch (error) {
        throw new Error()
    }
}