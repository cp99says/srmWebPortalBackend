const mongoose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const swe_schema = mongoose.Schema({
    date: {
        type: String,
        default: a,
        required: true,
    },
    ug1: {
        type: Number,
        required: true,
    },
    ug2: {
        type: Number,
        required: true,
    },
    ug3: {
        type: Number,
        required: true,
    },
    ug4: {
        type: Number,
        required: true,
    },
    pg1: {
        type: Number,
        required: true,
    },
    pg2: {
        type: Number,
        required: true,
    },
    phdi: {
        type: Number,
        required: true,
    },
    phde: {
        type: Number,
        required: true,
    },
    phdf: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("ktr_student_details_socp_swe", swe_schema);
