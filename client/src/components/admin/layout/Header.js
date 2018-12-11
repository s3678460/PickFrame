import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/loginActions";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
        <div className="container">
          <a href="/admin" className="navbar-brand">
            PickFrame Admin
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  <i className="fas fa-warehouse" /> Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/contributors" className="nav-link">
                  <i className="fas fa-user-ninja" /> Contributors
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.props.logout}>
                  <i className="fas fa-sign-out-alt" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
