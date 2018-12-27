import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteOrder, updateOrder } from "../../../actions/orderActions";
import classNames from "classnames";
// completed
// awaiting payment => popup email image sendbutton
class Order extends Component {
  state = {
    showOrderInfo: false
  };

  onDeleteClick = _id => {
    this.props.deleteOrder(_id);
  };

  handleChange = e =>
    this.props.updateOrder({ ...this.props.order, status: e.target.value });

  render() {
    const {
      _id,
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
    } = this.props.order;
    const { showOrderInfo } = this.state;
    const spanClass = classNames("badge", "badge-pill", {
      "badge-dark": status === "Pending",
      "badge-info": status === "Awaiting Payment",
      "badge-success": status === "Completed"
    });
    return (
      <div className="card card-body bg-light mb-3">
        <h4>
          {_id} <span className={spanClass}>{status}</span>{" "}
          <i
            onClick={() =>
              this.setState({ showOrderInfo: !this.state.showOrderInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, _id)}
          />
        </h4>
        {showOrderInfo ? (
          <ul className="list-group ">
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Status</div>
                <div className="col-sm-8">
                  <select
                    value={status}
                    className="form-control"
                    onChange={this.handleChange}
                    style={{ width: "300px" }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Awaiting Payment">Awaiting Payment</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Date</div>
                <div className="col-sm-8">{date}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Company</div>
                <div className="col-sm-8">{companyName}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Address</div>
                <div className="col-sm-8">{address}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Phone</div>
                <div className="col-sm-8">{companyPhone}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Account Holder</div>
                <div className="col-sm-8">{accountHolder}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Account Number</div>
                <div className="col-sm-8">{cardNumber}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Bank Name</div>
                <div className="col-sm-8">{bankName}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Bank Branch</div>
                <div className="col-sm-8">{bankBranch}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Email</div>
                <div className="col-sm-8">{email}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Product</div>
                <div className="col-sm-8">{productId}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-4">Total</div>
                <div className="col-sm-8">{total}</div>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
  deleteOrder: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteOrder, updateOrder }
)(Order);
