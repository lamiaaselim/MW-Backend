/**
 * Treat with DB
 * DB Schema for every entity in system
*/

const mongoose = require('mongoose')
const departmentSchema = mongoose.Schema({
    _id: Number,
    name: String
});

// collection name and default export 
module.exports = mongoose.model('departments', departmentSchema)