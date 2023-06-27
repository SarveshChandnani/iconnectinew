const mongoose = require("mongoose");

const activationSchema = new mongoose.Schema({
  websiteinfo: String,
  industrytype: String,
  areaofwork: String,
  registeredoffice: String,
  companyregno: String,
  currentlocation: String,
  locationofwork: String,
  employeecount: Number,
  internshipposting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posting",
  },
});

const Activation = mongoose.model("activationdata", activationSchema);

module.exports = Activation;
