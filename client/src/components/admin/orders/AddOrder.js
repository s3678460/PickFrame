import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddOrder extends Component {
  state = {
    date: "",
    company: "",
    cart: "",
    total: "",
    status: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { date, company, cart, total, status } = this.state;

    const newOrder = {
      id: uuid(),
      date,
      company,
      cart,
      total,
      status
    };

    dispatch({ type: "ADD_ORDER", payload: newOrder });

    this.setState({
      date: "",
      company: "",
      cart: "",
      total: "",
      status: ""
    });
  };

  render() {
    const { date, company, cart, total, status } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Order</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Date"
                    name="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Company"
                    name="company"
                    placeholder="Enter company"
                    value={company}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Cart"
                    name="cart"
                    placeholder="Enter cart"
                    value={cart}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Total Bill"
                    name="total"
                    placeholder="Enter total bill"
                    value={total}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Status"
                    name="status"
                    placeholder="Enter status"
                    value={status}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Add Order"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddOrder;
