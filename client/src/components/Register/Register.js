import React, { Component } from 'react';
import './Register.css';

import { Link } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            

                 <div className="bodyregister">

             <div className="reg-container">
            
            
             <div className="inner-reg-container">
          
          <div className="boxreg">
            <h1><a href="http://funkyimg.com/view/2NhH3" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1>
            
            <div class="row">
            
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <h1>Personal Information</h1>
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Display name" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Email" />  
                </div>
                
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <h1>Payment Information</h1>
                <input type="text" placeholder="Account Holder" />
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Bank Name" />
                <input type="text" placeholder="Branch" />  
                </div>
            </div>
            
            
            
            <button>Sign up</button>
        
        <b><p>By creating an account, I agree to PickFrame's <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
        
          </div>

        </div>
        
             
             

            {/* <div className="inner-container">

            {/* <div className="box">
            <h1><a href="http://funkyimg.com/view/2NhH3" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1>
           <form id="regform" action="">
           <h1>Personal Information</h1>
           <div className="tab">
           <p><input placeholder="First name..." oninput="this.className = ''" /></p>
        <p><input placeholder="Last name..." oninput="this.className = ''" /></p>
        <p><input placeholder="Phone..." oninput="this.className = ''" /></p>
        <p><input placeholder="Email..." oninput="this.className = ''" /></p>
            
            </div>

            <button>Login</button>
            <p>Not a member? <span> <b>Sign Up</b> </span></p>
            </form>
            </div>
            </div> */}
            </div> 

            </div>
                
            
        );
    }
}

export default Register;