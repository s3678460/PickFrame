import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
// import 'bootstrap-css-only/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken"
import {setCurrentUser} from "./actions/authAction"
import {logoutUser} from "./actions/authAction"

//Check for token
if(localStorage.jwtToken){
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info 
  const decoded=jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //Check for expired Token
  const currentTime = Date.now()/1000;
  if(decoded.exp<currentTime){
    //Logout user
    store.dispatch(logoutUser());
    //Clear current user profile and redirect to login
    window.location.href="/login"
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
