const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  mobileNo: { type: String, required: true },
  githubUsername: { type: String, required: true },
  collegeName: { type: String, required: true },
  accessCode: { type: String, required: true },
  clientID: { type: String },
  clientSecret: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
