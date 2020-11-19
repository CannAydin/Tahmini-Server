const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    //name: String,
    //email: String,
    //phone: String,
    //picture: String,
    //salary: String,
    //position: String,
    username : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type: String,
        unique : true,
        required: true
    },
    password : {
        type: String,
        required : true
    },
    //answers : [String],
    //optionalAnswers : [String],
    //timestamp : Number
});

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err,salt) => {
        if(err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    })
    
})

userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if(err) {
                return reject(err);
            }
            if(!isMatch) {
                return reject(false);
            }
            resolve(true)
        })
    })
}

mongoose.model('User', userSchema)