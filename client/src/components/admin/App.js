import React, { Component } from "react";
import Orders from "./orders/Orders";
import Header from "./layout/Header";
import AddOrder from "./orders/AddOrder";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddOrder />
            <Orders />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
