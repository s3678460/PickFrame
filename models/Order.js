const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Order Schema
const OrderSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  companyPhone: {
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
  },
  email: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: false
  },
  total: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: false
    // default: Date.now("<YYYY-mm-ddTHH:MM:ss>")
  }
});

module.exports = Order = mongoose.model("order", OrderSchema);
