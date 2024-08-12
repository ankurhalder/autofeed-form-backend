const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  goods: String,
  color: String,
  weight: Number,
});

const FormData = mongoose.model("FormData", formSchema);

module.exports = FormData;
