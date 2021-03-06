const mongoose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const studentActivities = mongoose.Schema({
  date: { type: String, default: a, required: true },
  hackathon: {
    participated: { type: Number, required: true },
    won: { type: Number, required: true },
    total_cash_prize: { type: Number, required: true },
  },
  awards: {
    international: { type: Number, required: true },
    national: { type: Number, required: true },
  },
  internship: {
    with_stipend: { type: Number, required: true },
    without_stipend: { type: Number, required: true },
  },
  email: { type: String, required: true },
  file: {
    type: String,
  },
});

module.exports = mongoose.model(
  "ktr_student_Activities_socp_cse",
  studentActivities
);
