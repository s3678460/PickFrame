import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/loginActions";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light mb-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container">
          <Link to="/admin" className="navbar-brand">
            PickFrame Admin
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/admin/contributors" className="nav-link">
                  <i className="fas fa-users" /> Users
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/orders" className="nav-link">
                  <i className="fas fa-warehouse" /> Orders
                </Link>
              </li>
              <li class="nav-item mr-auto">
                <Link to="/admin/requests" className="nav-link">
                  <i className="fas fa-images" /> Requests
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
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
