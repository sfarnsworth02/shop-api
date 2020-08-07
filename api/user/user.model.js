const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    isActive: {
        type: Boolean,
        required: false,
        unique: false,
    }
},
{
    timestamps: true,
})

module.exports = userSchema;