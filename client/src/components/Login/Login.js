import React, { Component } from 'react';
import './Login.css'
import {Link}from"react-router-dom"

class Login extends Component {
    render() {
        return (

            <div className="bodylogin">

                <div className="vid-container">

                    <div className="inner-container">

                        <div className="box">
                        <div className="logo">
                        <div className="clickable">
                        <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                        </div>
                            <form>
                            <input required type="text" placeholder="Username" />
                            <input required type="text" placeholder="Password" />
                            <button>Login</button>
                            </form>
                            <p>Not a member? <span> <Link to='/register'><b>Sign Up</b></Link> </span></p>
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;