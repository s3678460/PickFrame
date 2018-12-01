import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/login";
import validateInput from "../../../validation/login";
import TextInputGroup from "../layout/TextInputGroup";

class Login extends Component {
  state = {
    identifier: "",
    password: "",
    errors: {},
    isLoading: false
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  onSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props
        .login(this.state)
        .then(
          res => this.context.router.push("/"),
          err => this.setState({ errors: err.data.errors, isLoading: false })
        );
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Login
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <TextInputGroup
                  label="Username / Email"
                  name="identifier"
                  value={identifier}
                  onChange={this.onChange}
                  error={errors.identifier}
                />
                <TextInputGroup
                  label="Password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={isLoading}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};
Login.contextTypes = {
  router: PropTypes.object.isRequired
};
export default connect(
  null,
  { login }
)(Login);
