const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    answers : String,
    optionalAnswers : String,
})

mongoose.model('Answers', answersSchema);