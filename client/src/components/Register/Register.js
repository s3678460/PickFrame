import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';
import classnames from 'classnames';

import { Link } from "react-router-dom";

class Register extends Component {
    constructor(){
        super();
        this.state={
            fullName: '',
            displayName: '',
            email: '',
            password: '',
            accountHolder:'',
            cardNumber:'',
            bankName:'',
            bankBranch:'',
            errors:{}

        };
    
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        
    }

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            fullName:this.state.fullName,
            displayName:this.state.displayName,
            email:this.state.email,
            password:this.state.password,
            accountHolder:this.state.accountHolder,
            cardNumber:this.state.cardNumber,
            bankName:this.state.bankName,
            bankBranch:this.state.bankBranch,

        }

        axios.post('/api/users/register' , newUser)
        .then (res => console.log(res.data))
        .catch(err =>this.setState({errors:err.response.data}));
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="image-reg">

                <div className="container-reg">
                    <div className="logo">
                        <div className="clickable">
                            <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                    </div>
                    <form className="form-registration" noValidate onSubmit={this.onSubmit}>
                        <b><h2 style={{textAlign:"center"}}>Join</h2></b>
                        <p style={{textAlign:"center"}}>
                            Already a member?
                            <a> <Link to="/login">Sign in</Link></a>
                        </p>
                        <div className="row">


                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >


                                <b><p style={{marginLeft:50}}>Personal Information</p></b>
                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.fullName
                                })} type="text" placeholder="Full name" name="fullName" value={this.state.fullName} onChange={this.onChange} />
                                {errors.fullName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.fullName}</div> )}
                                </span>

                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.email
                                })} type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
                                {errors.email && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.email}</div> )}
                                </span>
                                
                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.displayName
                                })} type="text" placeholder="Display name" name="displayName" value={this.state.displayName} onChange={this.onChange} />
                                {errors.displayName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.displayName}</div> )}
                                </span>
                                
                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.password
                                })} type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                {errors.password && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.password}</div> )}
                                </span>



                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <b><p style={{marginLeft:50}}>Bank Account Information</p></b>
                                
                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.accountHolder
                                })} type="text" placeholder="Account holder" name="accountHolder" value={this.state.accountHolder} onChange={this.onChange} />
                                {errors.accountHolder && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.accountHolder}</div> )}
                                </span>
                                
                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.cardNumber
                                })} type="text" placeholder="Card number" name="cardNumber" value={this.state.cardNumber} onChange={this.onChange} />
                                {errors.cardNumber && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.cardNumber}</div> )}
                                </span>
                                
                                <span><input  className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.bankName
                                })} type="text" placeholder="Bank name"  name="bankName" value={this.state.bankName} onChange={this.onChange} />
                                {errors.bankName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.bankName}</div> )}
                                </span>
                                
                                <span><input className={classnames('form-control form-control-lg',{
                                    'is-invalid':errors.bankBranch
                                })} type="text" placeholder="Bank branch" name="bankBranch" value={this.state.bankBranch} onChange={this.onChange} />
                                {errors.bankBranch && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.bankBranch}</div> )}</span>

                            </div>

                        </div>
                        <button type="submit">Login</button>
                        <b style={{textAlign:"center"}}><p>By creating an account, I agree to PickFrame's <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
                    </form>


                </div>
            </div>


        );
    }
}

export default Register;