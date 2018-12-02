const isEmpty =require("./is-empty") ;
const Validator = require("validator");


module.exports=function validateRegisterInput(data){
    let errors ={};

    // data.fullName =!isEmpty(data.fullName)? data.fullName:' ';
    // data.displayName=!isEmpty(data.displayName) ? data.displayName : ' ';
    // data.email=!isEmpty(data.email) ? data.email : ' ';
    // data.password=!isEmpty(data.password) ? data.password : ' ';
    // data.accountHolder=!isEmpty(data.accountHolder) ? data.accountHolder : ' ';
    // data.cardNumber=!isEmpty(data.cardNumber) ? data.cardNumber : ' ';
    // data.bankName=!isEmpty(data.bankName) ? data.bankName : ' ';
    // data.bankBranch=!isEmpty(data.bankBranch) ? data.bankBranch : ' ';
    

    if (!Validator.isLength(data.displayName,{min:6,max:30})){
        errors.displayName = 'Display name must be between 6 and 30 characters'
    }

    if(Validator.isEmpty(data.displayName)){
        errors.displayName="Name field is required";
    }

    if(Validator.isEmpty(data.fullName)){
        errors.fullName="Full name field is required";
    }



    if(!Validator.isEmail(data.email)){
        errors.email="Email is invalid";
    }

    if(Validator.isEmpty(data.password)){
        errors.password="Password field is required";
    }

    if(!Validator.isLength(data.password,{min:6,max:20})){
        errors.password="Password must be between 6 and 20 characters";
    }

    if(!Validator.isLength(data.accountHolder,{min:2,max:30})){
        errors.accountHolder="Account Holder field is at between 2 and 30 characters";
    }

    if(Validator.isEmpty(data.accountHolder)){
        errors.accountHolder="Account Holder is required";
    }

    if(Validator.isEmpty(data.cardNumber)){
        errors.cardNumber="Card Number is invalid";
    }
    if(Validator.isEmpty(data.bankName)){
        errors.bankName="Bank Name field is required";
    }

    if(Validator.isEmpty(data.bankBranch)){
        errors.bankBranch="Bank Branch field is required";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
    }
