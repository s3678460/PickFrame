import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";
import axios from "axios";

class EditOrder extends Component {
  state = {
    companyName: "",
    address: "",
    companyPhone: "",
    accountHolder: "",
    cardNumber: "",
    bankName: "",
    bankBranch: "",
    email: "",
    productId: "",
    total: "",
    status: "",
    date: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`http://localhost:5000/api/orders/${id}`);
    const order = res.data;
    this.setState({
      companyName: order.companyName,
      address: order.address,
      companyPhone: order.companyPhone,
      accountHolder: order.accountHolder,
      cardNumber: order.cardNumber,
      bankName: order.bankName,
      bankBranch: order.bankBranch,
      email: order.email,
      productId: order.productId,
      total: order.total,
      status: order.status,
      date: order.date
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const {
      companyName,
      address,
      companyPhone,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      email,
      productId,
      total,
      status,
      date
    } = this.state;

    if (companyName === "") {
      this.setState({ errors: { companyName: "companyName is required" } });
      return;
    }
    if (companyPhone === "") {
      this.setState({ errors: { companyPhone: "companyPhone is required" } });
      return;
    }
    if (address === "") {
      this.setState({ errors: { address: "address is required" } });
      return;
    }
    if (accountHolder === "") {
      this.setState({ errors: { accountHolder: "accountHolder is required" } });
      return;
    }
    if (cardNumber === "") {
      this.setState({ errors: { cardNumber: "cardNumber is required" } });
      return;
    }
    if (bankName === "") {
      this.setState({ errors: { bankName: "bankName is required" } });
      return;
    }
    if (bankBranch === "") {
      this.setState({ errors: { bankBranch: "bankBranch is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }
    if (productId === "") {
      this.setState({ errors: { productId: "productId is required" } });
      return;
    }
    if (total === "") {
      this.setState({ errors: { total: "total is required" } });
      return;
    }
    if (status === "") {
      this.setState({ errors: { status: "status is required" } });
      return;
    }
    if (date === "") {
      this.setState({ errors: { date: "date is required" } });
      return;
    }
    const updOrder = {
      companyName,
      address,
      companyPhone,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      email,
      productId,
      total,
      status,
      date
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `http://localhost:5000/api/orders/${id}`,
      updOrder
    );
    dispatch({ type: "UPDATE_ORDER", payload: res.data });
  };

  render() {
    const {
      companyName,
      address,
      companyPhone,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      email,
      productId,
      total,
      status,
      date,
      errors
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Order</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Date"
                    name="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={this.onChange}
                    error={errors.date}
                  />
                  <TextInputGroup
                    label="Company Name"
                    name="companyName"
                    placeholder="Enter date"
                    value={companyName}
                    onChange={this.onChange}
                    error={errors.companyName}
                  />

                  <TextInputGroup
                    label="Address"
                    name="address"
                    placeholder="Enter address"
                    value={address}
                    onChange={this.onChange}
                    error={errors.address}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="companyPhone"
                    placeholder="Enter company"
                    value={companyPhone}
                    onChange={this.onChange}
                    error={errors.companyPhone}
                  />
                  <TextInputGroup
                    label="Account Holder"
                    name="accountHolder"
                    placeholder="Enter company"
                    value={accountHolder}
                    onChange={this.onChange}
                    error={errors.accountHolder}
                  />
                  <TextInputGroup
                    label="Card Number"
                    name="cardNumber"
                    placeholder="Enter company"
                    value={cardNumber}
                    onChange={this.onChange}
                    error={errors.cardNumber}
                  />
                  <TextInputGroup
                    label="Bank Name"
                    name="bankName"
                    placeholder="Enter company"
                    value={bankName}
                    onChange={this.onChange}
                    error={errors.bankName}
                  />
                  <TextInputGroup
                    label="Bank Branch"
                    name="bankBranch"
                    placeholder="Enter company"
                    value={bankBranch}
                    onChange={this.onChange}
                    error={errors.bankBranch}
                  />
                  <TextInputGroup
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter company"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Product ID"
                    name="productId"
                    placeholder="Enter cart"
                    value={productId}
                    onChange={this.onChange}
                    error={errors.productId}
                  />
                  <TextInputGroup
                    label="Total"
                    name="total"
                    placeholder="Enter total bill"
                    value={total}
                    onChange={this.onChange}
                    error={errors.total}
                  />
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                      className="form-control"
                      name="status"
                      onChange={this.onChange}
                    >
                      <option
                        value="Awaiting Payment"
                        selected={status === "Awaiting Payment"}
                      >
                        Awaiting Payment
                      </option>
                      <option
                        value="Completed"
                        selected={status === "Completed"}
                      >
                        Completed
                      </option>
                    </select>
                  </div>

                  <input
                    type="submit"
                    value="Update Order"
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

export default EditOrder;
