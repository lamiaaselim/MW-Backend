/**
 * Treat with DB
 * DB Schema for every entity in system
*/


import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
    country: String,
    city: String,
    Street: String,
    BuildNo: Number
})

const studentSchema = mongoose.Schema({
    _id: Number,
    name: String,
    email: {
        type: String,
        unique: [true, 'email used before'],
        require: true
    },
    password: {
        type: String,
        minLength: [8, "Password must be 8 char at least"]
    },
    department: Number
    // phone: {
    //     type: String,
    //     unique: [true, 'phone used before'],
    //     require: [true, 'phone is required'],
    //     validator: function (v) {
    //         return /^01[0125]\d{8}/.test(v)
    //     }
    // },
    // address: addressSchema
});

// collection name
module.exports = mongoose.model('students', studentSchema)