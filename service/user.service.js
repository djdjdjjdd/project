import User from "../models/auth.model"
export class UserService {
    async storeUser(user) {
        return User.create(user)
    }
    async getByIdUser(userId) {
        return await User.findById(userId)
    }
    async updateUser(userId, data) {
        const user = await this.getByIdUser(userId);
        if (!user) {
            throw new Error('user khong ton tai')
        }
        if (user.email === data.email) {
            delete data.email;
        }
        if (user.phone === data.phone) {
            delete data.phone;
        }

        const userUpdate = await User.findByIdUpdate(
            userId,
            data, {
            new: true
        }


        )
        return userUpdate
    }

    async getWithPaginate(limit, page, params) {
        const offset = (page - 1) * limit;
        const { email, gender, level } = params;
        const conditions = {};
        if (email) {
            conditions.email = new RegExp(`${email}`);
        }
        if (gender) {
            conditions.gender = gender;
        }
        if (level) {
            conditions.level = level;
        }
        const [count, users] = await Promise.all([
            User.countDocuments(conditions),
            User.find(conditions).limit(limit).skip(offset)
        ]);
        return {
            data: users,
            count,
            limit: + limit,
            page: +page
        }
    }
}