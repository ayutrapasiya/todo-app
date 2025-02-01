const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobby: {
        type: Array,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
});

const students = mongoose.model('Students', StudentSchema)
module.exports = students;