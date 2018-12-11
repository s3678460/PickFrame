import React, { Component } from 'react';
import './Register.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import { withRouter } from 'react-router-dom';

import { Link } from "react-router-dom";
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

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            displayName: '',
            email: '',
            password: '',
            accountHolder: '',
            cardNumber: '',
            bankName: '',
            bankBranch: '',
            errors: {}

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    componentDidMount() {
        const { history } = this.props;
        if (this.props.auth.isAuthenticated) {
            history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            fullName: this.state.fullName,
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password,
            accountHolder: this.state.accountHolder,
            cardNumber: this.state.cardNumber,
            bankName: this.state.bankName,
            bankBranch: this.state.bankBranch,

        }

        this.props.registerUser(newUser, this.props.history)

    }
    render() {
        const { errors } = this.state;
        const none = (
            <select
            className={classnames('', { 'is-invalid': errors.bankBranch })}
            type="select"
            name="bankBranch"

            value={this.state.bankBranch}
            onChange={this.onChange}
        >
            <option value="" className="text-muted">Branch...</option>
            <option disabled>No results found</option>
        </select>
        )
        const BANK = (
            <select
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
            </select>

        );

       

        


        return (
            <div className="image-reg">

                <div className="container-reg">
                    <div className="logo">
                        <div className="clickable">
                            <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                    </div>
                    <form className="form-registration" noValidate onSubmit={this.onSubmit}>
                        <b><h2 style={{ textAlign: "center" }}>Join</h2></b>
                        <p style={{ textAlign: "center" }}>
                            Already a member?
                            <a> <Link to="/login">Sign in</Link></a>
                        </p>

                        <div className="row">


                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >


                                <b><p style={{ marginLeft: 50 }}>Personal Information</p></b>
                                <span><input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.fullName
                                })} type="text" placeholder="Full name" name="fullName" value={this.state.fullName} onChange={this.onChange} />
                                    {errors.fullName && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.fullName}</div>)}
                                </span>

                                <span><input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.email
                                })} type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
                                    {errors.email && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.email}</div>)}
                                </span>

                                <span><input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.displayName
                                })} type="text" placeholder="Display name" name="displayName" value={this.state.displayName} onChange={this.onChange} />
                                    {errors.displayName && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.displayName}</div>)}
                                </span>

                                <span><input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.password
                                })} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                    {errors.password && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.password}</div>)}
                                </span>



                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <b><p style={{ marginLeft: 50 }}>Bank Account Information</p></b>

                                <span><input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.accountHolder
                                })} type="text" placeholder="Account holder (Optional)" name="accountHolder" value={this.state.accountHolder} onChange={this.onChange} />
                                    {errors.accountHolder && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.accountHolder}</div>)}

                                </span>


                                <span><input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.cardNumber
                                })} type="text" placeholder="Card number (Optional)" name="cardNumber" value={this.state.cardNumber} onChange={this.onChange} />
                                    {errors.cardNumber && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.cardNumber}</div>)}
                                </span>

                                <select
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
                                </select>
                                {errors.bankName && (<FormFeedback>{errors.bankName}</FormFeedback>)}

                                {this.state.bankName!='' ? BANK : none }
                                

                            </div>

                        </div>
                        <button type="submit">Login</button>
                        <b style={{ textAlign: "center" }}><p>By creating an account, I agree to PickFrame's <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
                    </form>


                </div>
            </div>


        );
    }
}

Register.PropTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));