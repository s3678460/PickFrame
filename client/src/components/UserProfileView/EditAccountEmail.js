import React, { Component } from 'react';
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
    editUser
} from "../../actions/authAction";
import { Link } from 'react-router-dom'

class EditAccountEmail extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onClick() {
        const { user, isAuthenticated } = this.props.auth;
        this.setState({
            email:user.email
            // bankBranch: user.bankBranch,

        })
    }

    componentWillReceiveProps(nextProps) {


        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

    }

    onSubmit(e) {
        const { user, isAuthenticated } = this.props.auth;
        e.preventDefault();
        const newEmail= {
            email:this.state.email,
            fullName:this.props.auth.user.fullName,
            displayName:this.props.auth.user.displayName,
            
            

        }

        this.props.editUser(newEmail, this.props.auth.user.id, this.props.history)





    }
    render() {
        const { errors } = this.state;
        return (
            <div style={{
                backgroundImage: `url(https://cdn.tutsplus.com/vector/uploads/legacy/tuts/147_Landscape_Wallpaper/Vector_Landscape.jpg)`,
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
                                <h1 className="text-center mb-5">Edit Email</h1>
                                <Form onSubmit={this.onSubmit}>
                                    {/* name */}
                                    <FormGroup row>
                                        {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                        <Col sm={12}>
                                            <b><p >Your New Email</p></b>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.email
                                            })} type="text" placeholder="New email" name="email" value={this.state.email} onChange={this.onChange} />
                                                {errors.email && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.email}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>
                            
                                    
                                    <FormGroup check row className="text-center pt-5">
                                        <Col sm={12}>
                                            <Button color="default" >Submit</Button>
                                            <Button color="default" onClick={this.onClick} >See current email</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Animation>
                    </div>
                </div>
            </div>
        );
    }
}

EditAccountEmail.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,


});

export default connect (mapStateToProps,{editUser,logoutUser}) (EditAccountEmail);