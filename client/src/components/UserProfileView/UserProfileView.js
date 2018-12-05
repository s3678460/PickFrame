import React, { Component } from 'react';
import './UserProfileView.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import { Fragment } from 'react';

import {
    logoutUser,
    editUser
  } from "../../actions/authAction";

  import classnames from 'classnames';

class UserProfileView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            displayName: '',
            
            accountHolder:'',
            cardNumber:'',
            bankName:'',
            bankBranch:'',
            errors:{}

        };
       
        
        
    }
    

    

    componentWillReceiveProps(nextProps){
        
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }

    }

   
    render() {
        const { user,isAuthenticated } = this.props.auth;
        
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
                                <Link to="/editprofile"><button  style={{marginLeft:"26%"}} type="button" className="btn btn-info btn-sm " data-toggle="modal" data-target="#myModal">Edit Profile</button></Link>
                                
                                
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
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    

});

export default connect(mapStateToProps, {editUser,logoutUser})(UserProfileView);