const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//create contact schema
const contactSchema = new Schema({
    name:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
})

module.exports = Contact = mongoose.model('contact', contactSchema)