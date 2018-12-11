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
import PropTypes from 'prop-types';
import {
    logoutUser,
    editUserPassword,
    
} from "../../actions/authAction";
import { Link } from 'react-router-dom'
class EditPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldpassword:'',
            password: '',
            password2:'',
            confirm : false,
            errors: {},
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onClick = this.onClick.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillReceiveProps(nextProps) {


        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

    }
    onSubmit(e) {
        const { user, isAuthenticated } = this.props.auth;
        e.preventDefault();
        if(this.state.password==this.state.password2){
        const newPassword = {
            password: this.state.password,
            
        }
        this.setState({confirm:true})
        this.props.editUserPassword(newPassword, this.props.auth.user.id, this.props.history)}
        else{
            this.setState({confirm:false})
            alert('Password is not matched')

        }





    }
    // onClick(){
    //     const { user, isAuthenticated } = this.props.auth;
    //     bcrypt.compare(this.state.oldpassword,user.password).then(isMatch=>{
    //         if(isMatch){
    //             this.setState({confirm:true})
    //         }
    //         else{
    //             alert('Wrong Password. Please type again!')
    //         }
    //     })

    // }


    render() {
        const { errors } = this.state;
        const { user, isAuthenticated } = this.props.auth;
        const isCorrect =(
            <Form onSubmit={this.onSubmit}>
                                    {/* name */}
                                    
                                    <FormGroup row>
                                        {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                        <Col sm={12}>
                                            <b><p >Your New Password</p></b>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.password
                                            })} type="password" placeholder="New password" name="password" value={this.state.password} onChange={this.onChange} />
                                                {errors.password && (<div className="invalid-feedback" >{errors.password}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>



                                     <FormGroup row>
                                        {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                        <Col sm={12}>
                                            <b><p >Confirm Your New Password Again</p></b>
                                            <input className="form-control form-control-lg valid" type="password" placeholder="Enter your current password..." name="password2" value={this.state.password2} onChange={this.onChange}/>
                                        </Col>
                                    </FormGroup>
                                
                                    
                                    <FormGroup check row className="text-center pt-5">
                                        <Col sm={12}>
                                            <Button color="default"  >Submit</Button>
                                            

                                        </Col>
                                    </FormGroup>
                                </Form>

        );

        const isIncorrect = (
            <Form onSubmit={this.onSubmit}>
                                    {/* name */}
                                    
                                    <FormGroup row>
                                        {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                        <Col sm={12}>
                                            <b><p >Your New Password</p></b>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.password
                                            })} type="password" placeholder="New password" name="password"  value={this.state.password} onChange={this.onChange} />
                                                {errors.password && (<div className="invalid-feedback" >{errors.password}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>
                                    


                                    <FormGroup row>
                                        {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                        <Col sm={12}>
                                            <b><p >Confirm Your New Password Again</p></b>
                                            <input className="form-control form-control-lg invalid" type="password" placeholder="Enter your current password..." name="password2" value={this.state.password2} onChange={this.onChange}/>
                                        </Col>
                                    </FormGroup>
                                

                                    <FormGroup check row className="text-center pt-5">
                                        <Col sm={12}>
                                            <Button color="default"  >Submit</Button>
                                            

                                        </Col>
                                    </FormGroup>
                                </Form>

        )
       
       


        return (

            <div style={{
                backgroundImage: `url(https://best-wallpaper.net/wallpaper/1920x1200/1809/Blue-white-and-red-gerbera-flowers-black-background_1920x1200.jpg)`,
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
                                <h1 className="text-center mb-5">Edit Password</h1>
                                {this.state.confirm==false ? isIncorrect:isCorrect}
                                

                            </div>
                        </Animation>
                    </div>
                </div>
            </div>
        );
    }
}

EditPassword.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,


});

export default connect(mapStateToProps, {logoutUser, editUserPassword})(EditPassword);