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
          <NavigationBar />
          <RouterURL />
          <FooterPage />
<<<<<<< HEAD
          {/* <AdminPage /> */}
=======
>>>>>>> fe54d87bbbb3b5c5b0af4ac427ffa3f98adb9a33
        </div>
      </Router>
    );
  }
}

export default App;
