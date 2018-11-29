import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import FooterPage from "../Footer/FooterPage";
import RouterURL from "../RouterURL/RouterURL";
import UserProfile from "../User/UserProfile";
import AdminPage from "../admin/AdminPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/admin" component={AdminPage} />
            <RouterURL />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
