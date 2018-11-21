import React, { Component } from "react";
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
