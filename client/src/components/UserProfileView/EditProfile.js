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
        this.onClick = this.onClick.bind(this);

    }
    clearForm() {
        var newState = {

            fullName: '',
            displayName: '',

            accountHolder: '',
            cardNumber: '',
            bankName: '',
            bankBranch: '',
            errors: {}
        }
        this.setState(newState)
    }
    onClick() {
        const { user, isAuthenticated } = this.props.auth;
        this.setState({
            fullName: user.fullName,
            displayName: user.displayName,
            accountHolder: user.accountHolder,
            cardNumber: user.cardNumber,
            bankName: user.bankName,
            bankBranch: user.bankBranch,

        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillReceiveProps(nextProps) {

        const { user, isAuthenticated } = this.props.auth;
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        

        //Set Current Profile Immediately
        



    }

    onSubmit(e) {
        const { user, isAuthenticated } = this.props.auth;
        e.preventDefault();
        const newUserProfile = {
            fullName: this.state.fullName,
            displayName: this.state.displayName,
            accountHolder: this.state.accountHolder,
            cardNumber: this.state.cardNumber,
            bankName: this.state.bankName,
            bankBranch: this.state.bankBranch,
            email:this.props.auth.user.email,
            

        }

        this.props.editUser(newUserProfile, this.props.auth.user.id, this.props.history)





    }
    render() {
        const { user, isAuthenticated } = this.props.auth;
        const { errors } = this.state;

        const none = (
            <Input
            className={classnames('', { 'is-invalid': errors.bankBranch })}
            type="select"
            name="bankBranch"

            value={this.state.bankBranch}
            onChange={this.onChange}
        >
            <option className="text-muted">Branch...</option>
            
            <option disabled>No results found</option>
            
        </Input>
        )
        const BANK = (
            <Input
                className={classnames('', { 'is-invalid': errors.bankBranch })}
                type="select"
                name="bankBranch"

                value={this.state.bankBranch}
                onChange={this.onChange}
            >
                <option value="" className="text-muted">Branch...</option>
                
                <option>{this.state.bankName} {' '} QUANG NINH</option>
                <option >{this.state.bankName} {' '} VINH PHUC</option>
                <option >{this.state.bankName} {' '} BAC NINH</option>
                <option >{this.state.bankName} {' '} HAI DUONG</option>
                <option >{this.state.bankName} {' '} HAI PHONG</option>
                <option >{this.state.bankName} {' '} DUYEN HAI</option>
                <option >{this.state.bankName} {' '} THUY NGUYEN</option>
                <option >{this.state.bankName} {' '} HUNG YEN</option>
                <option >{this.state.bankName} {' '} THANH HOA</option>
                <option >{this.state.bankName} {' '} NGHE AN</option>
                <option >{this.state.bankName} {' '} HUE</option>
                <option >{this.state.bankName} {' '} DA NANG</option>
                <option >{this.state.bankName} {' '}BINH DINH</option>
                <option >{this.state.bankName} {' '}KHANH HOA </option>
                <option >{this.state.bankName} {' '} PHAN RANG</option>
                <option >{this.state.bankName} {' '} PHAN THIET </option>
                <option >{this.state.bankName} {' '} GIA LAI </option>
                <option >{this.state.bankName} {' '} BINH PHUOC </option>
                <option >{this.state.bankName} {' '} LONG HOA </option>
                <option >{this.state.bankName} {' '}TAY NINH </option>
                <option >{this.state.bankName} {' '} BINH DUONG </option>
                <option >{this.state.bankName} {' '} DONG NAI </option>
                <option >{this.state.bankName} {' '} VUNG TAU </option>
                <option >{this.state.bankName} {' '} HO CHI MINH </option>
                <option >{this.state.bankName} {' '} CHO LON  </option>
                <option >{this.state.bankName} {' '} SAI GON  </option>
                <option >{this.state.bankName} {' '} KHAI NGUYEN   </option>
                <option >{this.state.bankName} {' '} LONG AN  </option>
                <option >{this.state.bankName} {' '} TIEN GIANG </option>
                <option >{this.state.bankName} {' '} LONG AN  </option>
                <option >{this.state.bankName} {' '} VINH LONG  </option>
                <option >{this.state.bankName} {' '} DONG THAP  </option>
                <option >{this.state.bankName} {' '} AN GIANG  </option>
                <option >{this.state.bankName} {' '} KIEN GIANG  </option>
                <option >{this.state.bankName} {' '} CAN THO </option>
                <option >{this.state.bankName} {' '} CA MAU  </option>
                <option >{this.state.bankName} {' '} HA NOI  </option>
                <option >{this.state.bankName} {' '} THANG LONG </option>
            </Input>

        );

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
                                            <Input
                                                className={classnames('', { 'is-invalid': errors.bankName })}
                                                type="select"
                                                name="bankName"

                                                value={this.state.bankName}
                                                onChange={this.onChange}
                                            >
                                                <option value="" className="text-muted">Choose your bank...</option>
                                                
                                                <option>ACB - NGAN HANG TMCP A CHAU</option>
                                                <option >VIETCOM - NGAN HANG TMCP NGOAI THUONG VN</option>
                                                <option >SACOMBANK - NGAN HANG TMCP SGTT</option>
                                                <option >AGRIBANK - NGAN HANG NONG NGHIEP VA PT NN VN</option>
                                                <option >VIETIN - NGAN HANG CONG THUONG VIET NAM</option>
                                                <option >VP - NGAN HANG TMCP VN TV</option>
                                                <option >BIDV - NGAN HANG TMCP DAU TU VA PHAT TRIEN VN</option>
                                                <option >TECHCOM - NGAN HANG TMCP KY THUONG VN</option>
                                                <option >MB - NGAN HANG TMCP QUAN DOI</option>
                                                <option >SHB - NGAN HANG TMCP SG-HN</option>
                                            </Input>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={12}>
                                        {this.state.bankName!='' ? BANK : none }

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