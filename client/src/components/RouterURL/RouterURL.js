import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ViewPage from "../ViewPage/ViewPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AdminPage from "../admin/AdminPage";
import Aboutus from "../Aboutus/Aboutus";
import QandA from "../Q&A/QandA";

import OrdersPage from "../OrdersPage/OrdersPage";
import OrdersPage2 from "../OrdersPage/OrdersPage2";
import Details from "../Details/Details";
import UserProfile from "../User/UserProfile";
import PostRegister from"../LandingPages/PostRegister";
import SellingPage from"../SellingPage/SellingPage";

import PrivateRoute from '../PrivateRoute/PrivateRoute'

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/view/:type/" component={ViewPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={OrdersPage} />
        <Route path="/checkout2" component={OrdersPage2} />
        <Route path="/details" component={Details} />
        <PrivateRoute path="/admin/" component={AdminPage} /> 
        <PrivateRoute path="/userprofile" component={UserProfile} />
        <Route path="/sellingimage/" component={SellingPage}/>
        <Route path="/postregister/" component={PostRegister}/>
        <Route path="/Aboutus" component={Aboutus} />
        <Route path="/QA" component={QandA} />
        <Route component={HomePage} /> 
        </Switch>
      </div>
    );
  }
}

export default RouterURL;
