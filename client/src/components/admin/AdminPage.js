import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Orders from "./orders/Orders";
import Header from "./layout/Header";
import Contributors from "./contributors/Contributors";
import Requests from "./requests/Requests";
import ContributorDetails from "./contributors/ContributorDetails";
import Login from "./auth/Login";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.css";

import { connect } from "react-redux";

class AdminPage extends Component {
  render() {
    return this.props.isLoginSuccess ? (
      <Router>
        <div className="AdminPage" style={{ backgroundColor: "white" }}>
          <Header />
          <div className="container py-5">
            <Switch>
              <Route exact path="/admin" component={Requests} />
              <Route exact path="/admin/orders" component={Orders} />
              <Route exact path="/admin/requests" component={Requests} />
              <Route
                exact
                path="/admin/contributors"
                component={Contributors}
              />
              <Route exact path="/admin/requests" component={Requests} />
              <Route
                exact
                path="/admin/contributor/:_id"
                component={ContributorDetails}
              />
              <Route exact path="/admin/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    ) : (
      <Login />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.login.isLoginSuccess
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminPage);
