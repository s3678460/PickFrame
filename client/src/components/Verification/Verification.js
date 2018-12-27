import React, { Component } from 'react';
import './Verification.css'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { userVerification } from '../../actions/authAction';
import { throws } from 'assert';

class Verification extends Component {
    constructor(){
        super();
        this.state={
            secretToken:'',
            errors:{}
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
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
        e.preventDefault();

        const secretToken = {
           secretToken: this.state.secretToken,

        }

        this.props.userVerification(secretToken, this.props.history)

    }
    render() {
        const { errors } = this.state;
        return (
            <div>

            <div className="verification">

                <div className="vid-container-verification">

                    <div className="inner-container-verification">

                        <div className="box-verification">
                            <div className="logo">
                                <div className="clickable">
                                    <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                            </div>
                            
                            <div className="form-registration" >
                            <h2 style={{textAlign:"center"}}>Enter Your Code Confirmation:</h2>
                            <form onSubmit={this.onSubmit} noValidate>
                            <input className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.secretToken
                                })} type="text"  name="secretToken" value={this.state.secretToken} onChange={this.onChange} />
                                    {errors.secretToken && (<div className="invalid-feedback"  style={{ marginLeft: 30 }}>{errors.secretToken}</div>)}
                                
                                <button type="submit">Confirm</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        );
    }
}

Verification.PropTypes = {
    userVerification: PropTypes.func.isRequired,
    
    errors: PropTypes.object.isRequired,
}


const mapStateToProps=(state)=>({
    errors:state.errors,
    auth:state.auth
})

export default connect(mapStateToProps,{userVerification}) (Verification);