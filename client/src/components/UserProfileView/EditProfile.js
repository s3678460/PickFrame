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
import {Link} from'react-router-dom'

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            displayName: '',

            accountHolder: '',
            cardNumber: '',
            bankName: '',
            bankBranch: '',
            errors: {}

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick=this.onClick.bind(this);

    }
    clearForm() {
        var newState = {

            fullName: '',
            displayName: '',
            
            accountHolder:'',
            cardNumber:'',
            bankName:'',
            bankBranch:'',
            errors:{}
    }
    this.setState(newState)
}
onClick(){
    const { user,isAuthenticated } = this.props.auth;
    this.setState({
        fullName:user.fullName,
        displayName:user.displayName,
        accountHolder:user.accountHolder,
        cardNumber:user.cardNumber,
        bankName:user.bankName,
        bankBranch:user.bankBranch,

    })
}

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    componentWillReceiveProps(nextProps){
        
        
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }

    }

    onSubmit(e){
        const { user,isAuthenticated } = this.props.auth;
        e.preventDefault();
        const newUserProfile = {
            fullName:this.state.fullName,
            displayName:this.state.displayName,
            accountHolder:this.state.accountHolder,
            cardNumber:this.state.cardNumber,
            bankName:this.state.bankName,
            bankBranch:this.state.bankBranch,

        }
        
        this.props.editUser(newUserProfile,this.props.auth.user.id,this.props.history)
      
        
    
        
        
    }
    render() {
        const { user, isAuthenticated } = this.props.auth;
        const { errors } = this.state;
        return (
            <div style={{
                backgroundImage: `url(https://wallpapercave.com/wp/DpTzW3R.jpg)`,
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
                                <h1 className="text-center mb-5">Edit Profile</h1>
                                <Form onSubmit={this.onSubmit}>
                                    {/* name */}
                                    <FormGroup row>
                                        {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                        <Col sm={12}>
                                            <b><p >Personal Information</p></b>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.fullName
                                            })} type="text" placeholder="Full name" name="fullName" value={this.state.fullName} onChange={this.onChange} />
                                                {errors.fullName && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.fullName}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>
                                    {/* size width */}
                                    <FormGroup row >
                                        {/* <Label for="width" sm={2}>Width</Label> */}
                                        <Col sm={12}>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.displayName
                                            })} type="text" placeholder="Display name" name="displayName" value={this.state.displayName} onChange={this.onChange} />
                                                {errors.displayName && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.displayName}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>
                                    {/* size height  */}
                                    <FormGroup row>
                                        {/* <Label for="height" sm={2}>Height</Label> */}
                                        <Col sm={12}>
                                            <b><p >Bank Account Information</p></b>

                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.accountHolder
                                            })} type="text" placeholder="Account holder" name="accountHolder" value={this.state.accountHolder} onChange={this.onChange} />
                                                {errors.accountHolder && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.accountHolder}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>

                                    {/* Selected category */}
                                    <FormGroup row>
                                        {/* <Label for="category" sm={2}>Category</Label> */}
                                        <Col sm={12}>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.cardNumber
                                            })} type="text" placeholder="Card number" name="cardNumber" value={this.state.cardNumber} onChange={this.onChange} />
                                                {errors.cardNumber && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.cardNumber}</div>)}
                                            </span>
                                        </Col>
                                    </FormGroup>

                                    {/* price */}
                                    <FormGroup row>
                                        {/* <Label for="price" sm={2}>Price</Label> */}
                                        <Col sm={12}>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.bankName
                                            })} type="text" placeholder="Bank name" name="bankName" value={this.state.bankName} onChange={this.onChange} />
                                                {errors.bankName && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.bankName}</div>)}
                                            </span>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={12}>
                                            <span><input className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.bankBranch
                                            })} type="text" placeholder="Bank branch" name="bankBranch" value={this.state.bankBranch} onChange={this.onChange} />
                                                {errors.bankBranch && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.bankBranch}</div>)}</span>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup check row className="text-center pt-5">
                                        <Col sm={12}>
                                            <Button color="default" >Submit</Button>
                                            <Button color="default" onClick={this.onClick} >See current profile</Button>
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

EditProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,


});

export default connect(mapStateToProps, { editUser, logoutUser })(EditProfile);