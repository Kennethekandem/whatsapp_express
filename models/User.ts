let authMongoose = require('mongoose');

let userSchema = authMongoose.Schema({
    username: String,
    phone: {
        type: String,
        required: true
    },
    bio: String,
    password: {
        type: String,
        required: true
    },
    profile_photo: String
})

module.exports = authMongoose.model('User', userSchema);