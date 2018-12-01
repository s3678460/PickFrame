import React, { Component } from 'react';
import './Login.css'
import {Link}from"react-router-dom"

class Login extends Component {
    constructor(){
        super();
        this.state={
            
            email: '',
            password: '',
            errors:{}

        };
        this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }    

    onSubmit(e){
        e.preventDefault();

        const user = {
            
            email:this.state.email,
            password:this.state.password,
            

        }

        console.log(user)
    }
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
                            <form onSubmit={this.onSubmit}>
                            <input required type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}/>
                            <input required type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
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