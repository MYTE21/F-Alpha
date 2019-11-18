const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
//    name, email, birthday, phone , password
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    birthday: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        min: 11
    },
    password: {
        type: String,
        required: true,
        max: 2589,
        min: 6
    }
});

module.exports = mongoose.model('User',  userSchema);