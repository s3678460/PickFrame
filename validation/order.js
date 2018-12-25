const isEmpty =require("./is-empty") ;
const Validator = require("validator");


module.exports=function validateOrderInput(data){
    let errors ={};

    //companyName
    if (!Validator.isLength(data.companyName,{min:1,max:30})){
        errors.companyName = 'Company Name must be between 1 and 30 characters'
    }
    if(Validator.isEmpty(data.companyName)){
        errors.companyName="Company Name field is required";
    }

    //address
    if(Validator.isEmpty(data.address)){
        errors.address="Address field is required";
    }

    //companyPhone
    if(Validator.isEmpty(data.companyPhone)){
        errors.companyPhone="Company Phone field is required";
    }

    //accountHolder
    if(!Validator.isLength(data.accountHolder,{min:2,max:30})){
        errors.accountHolder="Account Holder field is at between 2 and 30 characters";
    }
    if(Validator.isEmpty(data.accountHolder)){
        errors.accountHolder="Account Holder is required";
    }

    //cardNumber
    if(Validator.isEmpty(data.cardNumber)){
        errors.cardNumber="Card Number is invalid";
    }

    //bankName
    if(Validator.isEmpty(data.bankName)){
        errors.bankName="Bank Name field is required";
    }

    //bankBranch
    if(Validator.isEmpty(data.bankBranch)){
        errors.bankBranch="Bank Branch field is required";
    }

    //email
    if(!Validator.isEmail(data.email)){
            errors.email="Email is invalid";
        }
    if(Validator.isEmpty(data.email)){
        errors.email="Email field is required";
    }

    // //productId
    // if(Validator.isEmpty(data.productId)){
    //     errors.productId="Product Id field is required";
    // }

    // // total
    // if(Validator.isEmpty(data.total)){
    //     errors.total="Balance field is required";
    // }

    // // status
    // if(Validator.isEmpty(data.status)){
    //     errors.status="status field is required";
    // }

   

    return{
        errors,
        isValid: isEmpty(errors)
    }
    }
