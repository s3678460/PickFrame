const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accountHolder: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  bankBranch: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
