const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Create Image Schema
const SaleHistorySchema = new Schema({
    imageID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    
    // size: {
    //     width: {
    //         type: String,
    //         required: true
    //     },
    //     height: {
    //         type: String,
    //         required: true
    //     }
    // },
    
    originalImage: {
        type: String,
        required: true
    },
  
    category: {
        type: [String],
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: false
    }
    
})

module.exports = SaleHistory = mongoose.model("saleHistory", SaleHistorySchema)