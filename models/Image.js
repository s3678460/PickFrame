const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Create Image Schema
const ImageSchema = new Schema({
    imageID:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    uploadDate: {
        type: String,
        required: true
    },
    originalImage:{
        type: String,
        required: true
    },
    watermarkImage: {
        type: String,
        required: true
    },
    idSeller: {
        type: String,
        required: true
    }
})

module.exports = Image = mongoose.model('image', ImageSchema)