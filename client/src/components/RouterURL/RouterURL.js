import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ViewPageType from "../ViewPageType/ViewPageType";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AdminPage from "../admin/AdminPage";
import Aboutus from "../Aboutus/Aboutus";
import QandA from "../Q&A/QandA";
import Contactus from "../ContactUs/Contactus";
import Sitemap from "../SiteMap/Sitemap";
import LegalPrivacy from "../LegalPrivacy/LegalPrivacy";
import LicenseTerm from "../LicenseTerm/LicenseTerm";
import getContact from "../ContactUs/getContact";

import CustomerChat from "../CustomerChat/CustomerChat";
import EditAccountEmail from "../UserProfileView/EditAccountEmail";
import EditPassword from "../UserProfileView/EditPassword";
import OrdersPage from "../OrdersPage/OrdersPage";
import PostEditProfile from "../LandingPages/PostEditProfile";
import ConfirmPassword from "../UserProfileView/ConfirmPassword";
import Verification from "../Verification/Verification";
import Details from "../Details/Details";
import PostRegister from "../LandingPages/PostRegister";
import UserProfileView from "../UserProfileView/UserProfileView";
import SellingPage from "../SellingPage/SellingPage";
import CurrentSellingPage from "../CurrentSellingPage/CurrentSellingPage";
import EditProfile from "../UserProfileView/EditProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SalesHistory from "../SalesHistory/SalesHistory";


class RouterURL extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/view/:typesearch/:type" component={ViewPageType} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkout/:_id" component={OrdersPage} />
          <Route path="/details/:_id" component={Details} />
          <Route path="/admin/" component={AdminPage} />
          <PrivateRoute path="/userprofile/" component={UserProfileView} />
          {/* <PrivateRoute path="/userprofile" component={UserProfile} /> */}
          <PrivateRoute path="/sellingimage/" component={SellingPage} />
          <PrivateRoute
            path="/currentselling/"
            component={CurrentSellingPage}
          />
          <PrivateRoute path="/saleshistory/:_id" component={SalesHistory} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/editemail" component={EditAccountEmail} />
          <Route path="/editpassword" component={EditPassword} />
          <Route path="/postregister/" component={PostRegister} />
          <Route path="/postedit" component={PostEditProfile} />
          <Route path="/confirmpassword" component={ConfirmPassword} />
          <Route path="/verification" component={Verification} />
          <Route path="/Customerchat" component={CustomerChat}/>
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/QA" component={QandA} />
          <Route path="/Sitemap" component={Sitemap} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/LicenseTerm" component={LicenseTerm}/>
          <Route path="/LegalPrivacy" component={LegalPrivacy}/>
          <Route path="/getContact" component={getContact}/>
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default RouterURL;
