import React, { Component } from 'react';
import './UserProfileView.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {
    getContributor,
    updateContributor
  } from "../../actions/contributorActions";

  import classnames from 'classnames';

class UserProfileView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fullName:{
                value:""
            },
            displayName:{
                value:""
            },
            email:{
                value:""
            },
            accountHolder:{
                value:""
            },
            cardNumber:{
                value:""
            },
            bankName:{
                value:""
            },
            bankBranch:{
                value:""
            },
            errors: {}

            

        }
       
        this.onChange=this.onChange.bind(this);
        
    }
    clearForm() {
        var newState = {
            ...this.state,
            fullName: {
                value: '',
               
            },
            displayName: {
                value: '',
                
            },
            email: {
                value: '',
                
            },
            accountHolder: {
                value: '',
                
            },
            cardNumber: {
                value: '',
                
            },
            bankName: {
                value: '',
                
            },
            bankBranch: {
                value: '',
                
            }
        }
        this.setState(newState)
    }

    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var newState = {
            ...this.state,
            [name]: {
                ...this.state[name],
                value
            }
        }
        this.setState(newState)
    }

    

    
    
    render() {
        const { user } = this.props.auth;
        const { errors } = this.state;
        return (
            <div className="image-profile">

                <div className="container-profile">
                    <div className="logo">
                        <div className="clickable">
                            <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                    </div>
                    <div className="user-profile">



                        <div className="row">

                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <b><h2 style={{ textAlign: "center" }}>
                                    <img src="https://picsum.photos/200/300/?random
" />
                                </h2></b>
                                <h3>{user.fullName}</h3>
                                <button  style={{marginLeft:"26%"}} type="button" className="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal">Edit Profile</button>
                                {/* Modal */}
                                <div id="myModal" className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                        {/* Modal content*/}
                                        <div className="modal-content">
                                            <div className="modal-header">

                                                <h4 className="modal-title">Edit Profile</h4>
                                            </div>
                                            <div className="modal-body">
                                            
                                            {/* Edit User */}

                                            <div className="row">


<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >


    <b><p style={{marginLeft:50}}>Personal Information</p></b>
    <span><input  className={classnames('form-control form-control-lg',{
        'is-invalid':errors.fullName
    })} type="text" placeholder="Full name" name="fullName" value={this.state.fullName.value} onChange={this.onChange} />
    {errors.fullName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.fullName}</div> )}
    </span>

    <span><input  className={classnames('form-control form-control-lg',{
        'is-invalid':errors.email
    })} type="text" placeholder="Email" name="email" value={this.state.email.value} onChange={this.onChange} />
    {errors.email && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.email}</div> )}
    </span>
    
    <span><input  className={classnames('form-control form-control-lg',{
        'is-invalid':errors.displayName
    })} type="text" placeholder="Display name" name="displayName" value={this.state.displayName.value} onChange={this.onChange} />
    {errors.displayName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.displayName}</div> )}
    </span>
    
    



</div>

<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <b><p style={{marginLeft:50}}>Bank Account Information</p></b>
    
    <span><input  className={classnames('form-control form-control-lg',{
        'is-invalid':errors.accountHolder
    })} type="text" placeholder="Account holder" name="accountHolder" value={this.state.accountHolder.value} onChange={this.onChange} />
    {errors.accountHolder && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.accountHolder}</div> )}
    </span>
    
    <span><input  className={classnames('form-control form-control-lg',{
        'is-invalid':errors.cardNumber
    })} type="text" placeholder="Card number" name="cardNumber" value={this.state.cardNumber.value} onChange={this.onChange} />
    {errors.cardNumber && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.cardNumber}</div> )}
    </span>
    
    <span><input  className={classnames('form-control form-control-lg',{
        'is-invalid':errors.bankName
    })} type="text" placeholder="Bank name"  name="bankName" value={this.state.bankName.value} onChange={this.onChange} />
    {errors.bankName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.bankName}</div> )}
    </span>
    
    <span><input className={classnames('form-control form-control-lg',{
        'is-invalid':errors.bankBranch
    })} type="text" placeholder="Bank branch" name="bankBranch" value={this.state.bankBranch.value} onChange={this.onChange} />
    {errors.bankBranch && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.bankBranch}</div> )}</span>

</div>

</div>


                                                

                                            {/* Edit User */}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-default" >Save Changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" >

                                <div className="left-profile">

                                    <div className="profile-content"><span>Full Name: </span> <span>{user.fullName}</span></div>




                                </div>
                                <div className="left-profile">

                                    <div className="profile-content"><span>Display Name: </span> <span>{user.displayName}</span></div>

                                </div>

                                <div className="left-profile">

                                    <div className="profile-content"><span>Email: </span> <span>{user.email}</span></div>


                                </div>
                                <div className="left-profile">

                                    <div className="profile-content"><span>Account Holder: </span> <span>{user.accountHolder}</span></div>


                                </div>
                                <div className="left-profile">

                                    <div className="profile-content"><span>Card Number: </span> <span>{user.cardNumber}</span></div>


                                </div>
                                <div className="left-profile">

                                    <div className="profile-content"><span>Bank Name: </span> <span>{user.bankName}</span></div>


                                </div>

                                <div className="left-profile">

                                    <div className="profile-content"><span>Bank Branch: </span> <span>{user.bankBranch}</span></div>


                                </div>




                            </div>



                        </div>


                    </div>


                </div>
            </div>
        );
    }
}


UserProfileView.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,

});

export default connect(mapStateToProps, null)(UserProfileView);