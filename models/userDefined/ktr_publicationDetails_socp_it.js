const mongoose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const publication_schema = mongoose.Schema({
  date: { type: String, default: a, required: true },
  papers_in_scopus: {
    target: { type: Number, required: true },
    actual: { type: Number, required: true },
  },
  papers_in_sci: {
    target: { type: Number, required: true },
    actual: { type: Number, required: true },
  },
  highest_impact_factor: { type: Number, required: true },
  email: { type: String, required: true },
  file: {
    type: String,
  },
});

module.exports = mongoose.model(
  "ktr_publication_details_socp_it",
  publication_schema
);
