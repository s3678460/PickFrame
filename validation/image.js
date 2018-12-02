const Validator  = require("validator")
const isEmpty = require("./is-empty")

module.exports = function validateNewImageInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.originalImage = !isEmpty(data.originalImage) ? data.originalImage : '';
    data.category = !isEmpty(data.category) ? data.category : '';
    data.width = !isEmpty(data.width) ? data.width : '';
    data.height = !isEmpty(data.height) ? data.height : '';

    //condition

    //Name
    if(Validator.isEmpty(data.name)){
        errors.name = "Name can not be blanked"
    }
    
    //Price
    if(Validator.isEmpty(data.price)){
        errors.price = "Price can not be blanked"
    }
    if(parseInt(data.price) <= 0){
        errors.price = "Price can not be a negative number or 0"
    }

    //original Image
    if(Validator.isEmpty(data.originalImage)){
        errors.originalImage = "Please upload file!!!"
    }

    //category
    if(Validator.isEmpty(data.category)){
        errors.category = "Please choose the caterogy for your image!!!"
    }

    //size width
    if(Validator.isEmpty(data.width)){
        errors.sizeWidth = "Please input the width of your image!!!"
    }

    //size height
    if(Validator.isEmpty(data.height)){
        errors.sizeHeight = "Please input the height of your image!!!"
    }

    //results
    return {
        errors,
        isValid: isEmpty(errors)
    }
}