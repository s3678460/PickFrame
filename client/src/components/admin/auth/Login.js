import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/loginActions";
import TextInputGroup from "../layout/TextInputGroup";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
          <div className="container">
            <a href="/admin" className="navbar-brand">
              PickFrame Admin
            </a>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-6 mx-auto my-5">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center pb-4 pt-3">
                  <span className="text-primary">
                    <i className="fas fa-lock" /> Login
                  </span>
                </h1>
                <form onSubmit={this.onSubmit}>
                  <TextInputGroup
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    type="password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  <div className="form-group">
                    <button className="btn btn-primary btn-block">Login</button>
                  </div>
                </form>
                <div>
                  {isLoginPending && <div>Please wait...</div>}
                  {isLoginSuccess && <div>Success.</div>}
                  {loginError && <div>{loginError.message}</div>}
                </div>
              </div>
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

const mapStateToProps = state => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
