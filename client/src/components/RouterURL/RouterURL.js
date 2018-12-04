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
import PostRegister from "../LandingPages/PostRegister";
import UserProfileView from "../UserProfileView/UserProfileView";
import SellingPage from "../SellingPage/SellingPage";
import CurrentSellingPage from "../CurrentSellingPage/CurrentSellingPage";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={HomePage} />
          <Route path="/view/:type/" component={ViewPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={OrdersPage} />

          <Route path="/details" component={Details} />
          <Route path="/admin/" component={AdminPage} />
          <PrivateRoute path="/userprofile/" component={UserProfileView} />
          {/* <PrivateRoute path="/userprofile" component={UserProfile} /> */}
          <PrivateRoute path="/sellingimage/" component={SellingPage} />
          <PrivateRoute
            path="/currentselling/"
            component={CurrentSellingPage}
          />
          <Route path="/postregister/" component={PostRegister} />
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/QA" component={QandA} />
          <Route component={HomePage} />
=======
        <Route exact path="/" component={HomePage} />
        <Route path="/view/:type/" component={ViewPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={OrdersPage} />
        
        <Route path="/details" component={Details} />
        <PrivateRoute path="/admin/" component={AdminPage} /> 
        <PrivateRoute path="/userprofile/" component={UserProfileView} />
        {/* <PrivateRoute path="/userprofile" component={UserProfile} /> */}
        <PrivateRoute path="/sellingimage/" component={SellingPage}/>
        <PrivateRoute path="/currentselling/" component={CurrentSellingPage}/>
        <Route path="/postregister/" component={PostRegister}/>
        <Route path="/Aboutus" component={Aboutus} />
        <Route path="/QA" component={QandA} />
        <Route path="/Sitemap" component={Sitemap}/>
        <Route path="/Contactus" component={Contactus}/>
        <Route component={HomePage} /> 
>>>>>>> fe54d87bbbb3b5c5b0af4ac427ffa3f98adb9a33
        </Switch>
      </div>
    );
  }
}

export default RouterURL;
