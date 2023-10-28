import mongoose from 'mongoose'

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        default: "user name",
    },
    gender: {
        type: String,
        require: true,
        default: "user gender",
    },
    password: {
        type: String,
        require: true,
        default: "user password",
    },
    phone: {
        type: String,
        require: true,
        default: "user phone",
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    },
    image: {
        type: String,
        require: false,
    },
    isDeleted: {
        type: Boolean,
        require: true,
        default: false,
    },
},
    {
        timestamps: true,
    })

export const UserModel = mongoose.model('User', schema);