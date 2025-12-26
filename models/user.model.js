const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    username: String,
    email: {
        type: String,
        unique: [true, 'email used before'],
        require: true
    },
    password: {
        type: String,
        minLength: [8, "Password must be 8 char at least"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// collection name
module.exports = mongoose.model('users', userSchema)