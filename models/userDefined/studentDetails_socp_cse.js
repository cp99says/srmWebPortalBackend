const mongoose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const studentDetails_schema = mongoose.Schema({
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
  email: { type: String, required: true },
  file: {
    type: String,
  },
});
module.exports = mongoose.model(
  "ktr_Student_Details_socp_cse",
  studentDetails_schema
);
