import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ViewPage from "../ViewPage/ViewPage";
import AdminPage from "../admin/App";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/view/:type/" component={ViewPage} />
          <Route exact path="/admin/" component={AdminPage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default RouterURL;
