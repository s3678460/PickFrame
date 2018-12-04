import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ViewPage from "../ViewPage/ViewPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AdminPage from "../admin/AdminPage";
import Aboutus from "../Aboutus/Aboutus";
import QandA from "../Q&A/QandA";
import Contactus from "../ContactUs/Contactus";
import Sitemap from "../SiteMap/Sitemap";

import OrdersPage from "../OrdersPage/OrdersPage";
import Details from "../Details/Details";
import UserProfile from "../User/UserProfile";

import NavigationBar from "../NavigationBar/NavigationBar";
import FooterPage from "../Footer/FooterPage";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/view/:type/" component={ViewPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={OrdersPage} />
        <Route path="/details" component={Details} />
        {/* <Route path="/admin/" component={AdminPage} /> */}
        <Route path="/userprofile/" component={UserProfile} />
        <Route path="/Aboutus" component={Aboutus} />
        <Route path="/QA" component={QandA} />
        <Route path="/Contactus" component={Contactus}/>
        <Route path="/Sitemap" component={Sitemap}/>
        {/* <Route component={HomePage} /> */}
        <FooterPage />
      </div>
    );
  }
}

export default RouterURL;
