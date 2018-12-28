const isEmpty =require("./is-empty") ;
const Validator = require("validator");

module.exports=function validateContactInput(data){
    let errors ={};

    if(Validator.isEmpty(data.name)){
        errors.name = "The section must be filled"
    }
    if(!Validator.isEmail(data.email)){
        errors.email = "Invalid Email"
    }
    if(Validator.isEmpty(data.email)){
        errors.email = "The section must be filled"
    }
    
    if(Validator.isEmpty(data.phoneNumber)){
        errors.phoneNumber = "The section must be filled"
    }

    if(Validator.isEmpty(data.message)){
        errors.message = "The section must be filled"
    }
   
  

   

    return{
        errors,
        isValid: isEmpty(errors)
    }
    }