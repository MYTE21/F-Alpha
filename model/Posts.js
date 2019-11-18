const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        min: 6,
        max: 60
    },
    body: {
        type: String,
        required: true,
        min:6,
        max: 500
    },
    date: {
        type: Date,
        default: Date.now()
    },
    _created_by: {
        type: Schema.ObjectId,
        ref : 'User'
    },
    rate: {
        type: Number,
        min:0,
        max:5,
        default: 0
    }

});

module.exports =  mongoose.model('Post' , postSchema);
