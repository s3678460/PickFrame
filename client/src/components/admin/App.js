import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Orders from "./orders/Orders";
import AddOrder from "./orders/AddOrder";
import Header from "./layout/Header";
import Contributors from "./contributors/Contributors";
import NotFound from "./NotFound";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/admin" component={Orders} />
                <Route
                  exact
                  path="/admin/contributors"
                  component={Contributors}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
