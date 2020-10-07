const mongoose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const schema = mongoose.Schema({
  date: {
    type: String,
    default: a,
    required: true,
  },
  students_went_for_higher_studies: {
    type: Number,
    required: true,
  },
  universityName: {
    type: Number,
    required: true,
  },
  email: { type: String, required: true },
  file: {
    type: String,
  },
});

module.exports = mongoose.model("ktr_higher_studies_socp_it", schema);
