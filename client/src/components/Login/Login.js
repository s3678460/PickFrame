import React, { Component } from 'react';
import './Login.css'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction'
import classnames from 'classnames';
import { withRouter } from 'react-router';

class Login extends Component {
    constructor() {
        super();
        this.state = {

            email: '',
            password: '',
            errors: {}

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { history } = this.props;
        if (this.props.auth.isAuthenticated) {
            history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {

            email: this.state.email,
            password: this.state.password,


        }

        this.props.loginUser(userData)
    }
    render() {
        const { errors } = this.state;

        return (

            <div className="bodylogin">

                <div className="vid-container">

                    <div className="inner-container">

                        <div className="box">
                            <div className="logo">
                                <div className="clickable">
                                    <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                            </div>
                            <form onSubmit={this.onSubmit} noValidate>
                                <input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.email
                                })} type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
                                {errors.email && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.email}</div>)}

                                <input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.password
                                })} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                {errors.password && (<div className="invalid-feedback" style={{ marginLeft: 50 }}>{errors.password}</div>)}
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);