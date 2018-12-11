import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Orders from "./orders/Orders";
import EditOrder from "./orders/EditOrder";
import Header from "./layout/Header";
import Contributors from "./contributors/Contributors";
import ContributorDetails from "./contributors/ContributorDetails";
import Login from "./auth/Login";
import NotFound from "./NotFound";

import { connect } from "react-redux";

class AdminPage extends Component {
  render() {
    return this.props.isLoginSuccess ? (
      <Router>
        <div className="AdminPage">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/admin" component={Orders} />
              <Route exact path="/admin/order/edit/:id" component={EditOrder} />
              <Route
                exact
                path="/admin/contributors"
                component={Contributors}
              />
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
