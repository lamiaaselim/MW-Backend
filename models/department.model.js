/**
 * Treat with DB
 * DB Schema for every entity in system
*/

import mongoose from 'mongoose';

const departmentSchema = mongoose.Schema({
    _id: Number,
    name: String
});

// collection name
mongoose.model('departments', departmentSchema)