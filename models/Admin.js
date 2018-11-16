const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Create Admin Schema
const AdminSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = Admin = mongoose.model('admin', AdminSchema)