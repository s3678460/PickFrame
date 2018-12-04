const isEmpty =require("./is-empty") ;
const Validator = require("validator");


module.exports=function validateLoginInput(data){
    let errors ={};

    
    
    if(!Validator.isEmail(data.email)){
        errors.email="Email is invalid";
    }

    if(Validator.isEmpty(data.email)){
        errors.email="Email field is required";
    }

    if(Validator.isEmpty(data.password)){
        errors.password="Password field is required";
    }

    

    

    return{
        errors,
        isValid: isEmpty(errors)
    }
    }
