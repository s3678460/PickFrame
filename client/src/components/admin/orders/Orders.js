import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "./Order";
import { Consumer } from "../context";

class Orders extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { orders } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-info">Order</span> List
              </h1>
              {orders.map(order => (
                <Order key={order.id} order={order} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Orders;
