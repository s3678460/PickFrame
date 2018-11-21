import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload)
      };
    case "ADD_ORDER":
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    orders: [
      {
        id: Math.floor(Math.random() * 10000),
        date: "May 4, 2018",
        company: "RMIT Vietnam",
        cart: "1 x TECH, 1 x CREATIVE",
        total: "1.000.000",
        status: "Awaiting Payment"
      },
      {
        id: Math.floor(Math.random() * 10000),
        date: "November 12, 2018",
        company: "WestFood",
        cart: "1 x FRUIT",
        total: "500.000",
        status: "Awaiting Payment"
      },
      {
        id: Math.floor(Math.random() * 10000),
        date: "May 8, 2018",
        company: "Koi The",
        cart: "1 x TEA",
        total: "1.500.000",
        status: "Completed"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // componentDidMount() {
  //   axious.get()
  //   .then(res => this.setState({orders: res.data}))
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
