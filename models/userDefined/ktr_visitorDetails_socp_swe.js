const mongoose = require("mongoose");

var date = new Date();
var a = date.toDateString();

const visDetails = mongoose.Schema({
  date: {
    type: String,
    default: a,
    required: true,
  },
  academicians: {
    visited_campus: { type: Number, required: true },
    online: { type: Number, required: true },
  },
  alumni: {
    visited_campus: { type: Number, required: true },
    online: { type: Number, required: true },
  },
  industrialists: {
    visited_campus: { type: Number, required: true },
    online: { type: Number, required: true },
  },
  email: { type: String, required: true },
  file: {
    type: String,
  },
});

module.exports = mongoose.model("ktr_visitor_details_socp_swe", visDetails);
