import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link to="/admin/login" className="nav-link">
                <i className="fas fa-sign-in-alt" /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
