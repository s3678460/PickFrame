import React, { Component } from 'react';
import './Register.css';

import { Link } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div className="image-reg">

                <div className="container-reg">
                    <div className="logo">
                        <div className="clickable">
                            <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                    </div>
                    <form className="form-registration">
                        <b><h2 style={{textAlign:"center"}}>Join</h2></b>
                        <p style={{textAlign:"center"}}>
                            Already a member?
                            <a> <Link to="/login">Sign in</Link></a>
                        </p>
                        <div className="row">


                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >


                                <b><p style={{marginLeft:50}}>Personal Information</p></b>
                                <span><input type="text" placeholder="Full name" /></span>
                                <span><input type="text" placeholder="Email" /></span>
                                <span><input type="text" placeholder="Display name" /></span>
                                <span><input type="text" placeholder="Password" /></span>



                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <b><p style={{marginLeft:50}}>Bank Account Information</p></b>
                                <span><input type="text" placeholder="Account holder" /></span>
                                <span><input type="text" placeholder="Card number" /></span>
                                <span><input type="text" placeholder="Bank name" /></span>
                                <span><input type="text" placeholder="Bank branch" /></span>

                            </div>

                        </div>
                        <button>Login</button>
                        <b style={{textAlign:"center"}}><p>By creating an account, I agree to PickFrame's <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
                    </form>


                </div>
            </div>


        );
    }
}

export default Register;