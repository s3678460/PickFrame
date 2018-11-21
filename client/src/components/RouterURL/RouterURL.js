import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import ViewPage from '../ViewPage/ViewPage';
import Login from '../Login/Login'
import Register from '../Register/Register'
import AdminPage from "../admin/App";


class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/view/:type/" component={ViewPage} />
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/admin/" component={AdminPage} />
                    <Route component={HomePage}/> 
                    
                </Switch>
            </div>
        );
    }


  }


export default RouterURL;
