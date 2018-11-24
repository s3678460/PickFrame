import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter(order => order._id !== action.payload)
      };
    case "ADD_ORDER":
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case "UPDATE_ORDER":
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.payload._id ? (order = action.payload) : order
        )
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

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/orders");
    this.setState({ orders: res.data });
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
