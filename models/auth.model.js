import { String, Number, Text, Logo, required } from "joi";
import mongoose, { Error } from "mongoose";
import validator from "validator";
import { password } from "../validations/custom.validation";
import bcrypt from 'bcrypt'
const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('emain ko dang nhap duoc');
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error('mat khau co it nhat 2 ki tu tro len');
            }
        },
        private: true,
    },
    role: {
        default: 'user',
        type: String,
        enum: roles,
    }
});
bcrypt.compare(encriptPassword, hash).then(function (result) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5))
})
bcrypt.compare(validPassword, hash).then(function (result) {
    return bcrypt.compareSync(password, this.password)
})
export default mongoose.model(
    'Auth',
    authSchema,
    'auth',
);