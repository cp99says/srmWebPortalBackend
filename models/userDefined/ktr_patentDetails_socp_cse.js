const mongosose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const patent = mongosose.Schema({
  date: { type: String, default: a, required: true },
  patents_filed: {
    target: { type: Number, required: true },
    actual: { type: Number, required: true },
  },
  patents_published: {
    target: { type: Number, required: true },
    actual: { type: Number, required: true },
  },
  patents_granted: {
    target: { type: Number, required: true },
    actual: { type: Number, required: true },
  },
  email: { type: String, required: true },
  file: {
    type: String,
  },
});

module.exports = mongosose.model("ktr_patent_details_socp_cse", patent);
