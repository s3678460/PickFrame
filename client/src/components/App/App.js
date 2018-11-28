import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import FooterPage from "../Footer/FooterPage";
import RouterURL from "../RouterURL/RouterURL"
import UserProfile from "../User/UserProfile";
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
        <Router>
          <div className="App">
            <NavigationBar/>
            <RouterURL />
            <FooterPage />
          </div>
        </Router>
    );
  }
}

export default App;
