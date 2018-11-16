const mongoose = require("mongoose")
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
    }
})

module.exports = Order = mongoose.model('order', OrderSchema)