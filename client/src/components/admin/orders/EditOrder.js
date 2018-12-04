import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrder, updateOrder } from "../../../actions/orderActions";

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

  componentWillReceiveProps(nextProps, nextState) {
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
    } = nextProps.order;

    this.setState({
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
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOrder(id);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
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

    const { id } = this.props.match.params;

    const updOrder = {
      _id: id,
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

    this.props.updateOrder(updOrder);
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
      <div className="card mb-3">
        <div className="card-header">Edit Order</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
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
                <option value="Completed" selected={status === "Completed"}>
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
  }
}

EditOrder.propTypes = {
  order: PropTypes.object.isRequired,
  getOrder: PropTypes.func.isRequired
};
const mapStateToProps = state => ({ order: state.order.order });
export default connect(
  mapStateToProps,
  { getOrder, updateOrder }
)(EditOrder);
