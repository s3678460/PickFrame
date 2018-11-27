import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import ViewPage from '../ViewPage/ViewPage';
import Login from '../Login/Login'
import Register from '../Register/Register'
import AdminPage from "../admin/App";
import Aboutus from"../Aboutus/Aboutus";
import QandA from"../Q&A/QandA";

import OrdersPage from "../OrdersPage/OrdersPage"
import UserProfile from "../User/UserProfile"


class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/view/:type/" component={ViewPage} />
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/checkout" component={OrdersPage}/>
                    <Route path="/admin/" component={AdminPage} />
                    <Route path="/userprofile/" component={UserProfile} />
                    <Route path="/Aboutus" component={Aboutus} />
                    <Route path="/QA" component={QandA} />
                    <Route component={HomePage}/> 
                </Switch>
            </div>
        );
    }


  }


export default RouterURL;
