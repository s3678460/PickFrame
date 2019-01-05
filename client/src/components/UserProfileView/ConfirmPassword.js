import React, { Component } from 'react';

import bcrypt from 'bcryptjs';
import {
    Col,
    Button,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    FormFeedback,
    CustomInput
} from 'reactstrap';
import { connect } from "react-redux";
import classnames from 'classnames'
import { Animation } from "mdbreact"
import { Route, Switch ,withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    logoutUser,
    editUserPassword,
    
} from "../../actions/authAction";
import { Link } from 'react-router-dom'

class ConfirmPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            oldpassword:'',
            confirm:false,
        } 

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onClick(){
        const { user, isAuthenticated } = this.props.auth;
        bcrypt.compare(this.state.oldpassword,user.password).then(isMatch=>{
            if(isMatch){
                this.setState({confirm:true})
                
                
            }
            else{
                alert('Wrong Password. Please type again!')
            }
        })

    
    }
    componentWillReceiveProps(nextProps) {


        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

    }
    render() {
        const isConfirm = (
            <Form>
            <FormGroup row>
            {/* <Label for="nameImage" sm={2}>Name image</Label> */}
            <Col sm={12}>
                <b><p >Please confirm your old password:</p></b>
                <input className="form-control form-control-lg is-valid " type="password" placeholder="Enter your current password..." name="oldpassword" value={this.state.oldpassword} onChange={this.onChange}/>
                <div className="valid-feedback" >Confirm Successfull!</div>
            </Col>
        </FormGroup>
        <FormGroup check row className="text-center pt-5">
            <Col sm={12}>
            <Link to="/editpassword"><Button color="default" onClick={this.onClick} >Next</Button></Link>
                

            </Col>
        </FormGroup> 
        </Form>
        )

        const notConfirm = (
            <Form>
            <FormGroup row>
            {/* <Label for="nameImage" sm={2}>Name image</Label> */}
            <Col sm={12}>
                <b><p >Please confirm your old password:</p></b>
              
               <input className="form-control form-control-lg  " type="password" placeholder="Enter your current password..." name="oldpassword" value={this.state.oldpassword} onChange={this.onChange}/>
               
            </Col>
        </FormGroup>
        <FormGroup check row className="text-center pt-5">
            <Col sm={12}>
           <Button color="default" onClick={this.onClick} >Confirm</Button>
                

            </Col>
        </FormGroup> 
        </Form>
        )
        return (
            <div style={{
                backgroundImage: `url(https://www.planwallpaper.com/static/images/8ccb4ec4225b290726ae9be975220ff4.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="containInput">
                        <Animation type="fadeInDown">
                            <div className="container pt-5 pb-5 z-depth-5" style={{ backgroundColor: "white" }}>
                                <Link to="/userprofile" className="btn btn-link text-center left">
                                    <i className="fas fa-arrow-circle-left" /> Back To Your Current Profile
            </Link>
                                <h1 className="text-center mb-5">Confirm Password</h1>

                                  
                                  {this.state.confirm==false?notConfirm:isConfirm}
                                
                                

                            </div>
                        </Animation>
                    </div>
                </div>
            </div>
        );
    }
}

ConfirmPassword.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,


});

export default connect(mapStateToProps,{logoutUser,editUserPassword}) (ConfirmPassword);