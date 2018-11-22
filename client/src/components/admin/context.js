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
    orders: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/orders")
      .then(res => this.setState({ orders: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
