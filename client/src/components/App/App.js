import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import FooterPage from "../Footer/FooterPage";
import RouterURL from "../RouterURL/RouterURL";
import UserProfile from "../User/UserProfile";
import AdminPage from "../admin/AdminPage";
import CustomerChat from "../CustomerChat/CustomerChat"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <MessengerCustomerChat
                pageId="748005935547925"
                appId="2237405953201698"
                /> 
          <RouterURL />
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
