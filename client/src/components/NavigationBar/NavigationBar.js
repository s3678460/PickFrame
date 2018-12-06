import React, { Component } from 'react';
import './NavigationBar.css'
import logo from '../../images/logo-white.png'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction'
import { Link, Redirect } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

 onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();

  } 

  render() {
    const bgNav = { backgroundColor: 'black' }
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <NavbarNav right>
        <MDBDropdown>
          <MDBDropdownToggle caret color="dark">
            <Fa icon="user-circle" /> {' '}
            Hi, {user.displayName} !
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <Link to="/userprofile"><MDBDropdownItem ><Fa icon="camera-retro" />{' '}Your Profile</MDBDropdownItem></Link>
            <Link to="/sellingimage">
              <MDBDropdownItem ><Fa icon="camera-retro" />{' '}Selling new image</MDBDropdownItem>
            </Link>
            <Link to="/currentselling">
              <MDBDropdownItem ><Fa icon="camera-retro" />{' '}Your current selling</MDBDropdownItem>
            </Link>
            <MDBDropdownItem ><Fa icon="camera-retro" />{' '}Sale History</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBDropdownItem onClick={this.onLogoutClick.bind(this)} ><Fa icon="spinner" /> Log Out !</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>



      </NavbarNav>

    );

    const guestLinks = (
      <NavbarNav right>
        <NavItem>
          <NavLink to="/login"><a style={{ fontWeight: "bold" }}><Fa icon="user-plus" size="lg" className="mr-1" />Login</a></NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/register"><a style={{ fontWeight: "bold" }}><Fa icon="user-plus" size="lg" className="mr-1" />Register</a></NavLink>
        </NavItem>

      </NavbarNav>

    );

    return (
      <div>
        <Navbar style={bgNav} dark expand="md" scrolling>
          <NavbarBrand href="/">
            <img src={logo} alt="logobrand" height="50" />
          </NavbarBrand>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/view/photos"><a style={{ fontWeight: "bold" }}>Photos</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/view/illustrations"><a style={{ fontWeight: "bold" }}>Illustrations</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/view/vectors"><a style={{ fontWeight: "bold" }}>Vectors</a></NavLink>
              </NavItem>
            </NavbarNav>
            {isAuthenticated ? authLinks : guestLinks}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,

});

export default connect(mapStateToProps, { logoutUser })(NavigationBar);
