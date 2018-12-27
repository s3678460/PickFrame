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

  },
  cardNumber: {
    type: String,

  },
  bankName: {
    type: String,

  },
  bankBranch: {
    type: String,

  },

  balance: {
    type: Number,

  },

  isPassChanged: {
    type: String,
    default: 'false'
  },
  secretToken:{
    type:String
  },
  active:{
    type:Boolean
  }

  
});

module.exports = User = mongoose.model("user", UserSchema);
