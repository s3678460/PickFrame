import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
class Order extends Component {
  state = {
    showOrderInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_ORDER", payload: id });
  };

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
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {_id}{" "}
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
                  onClick={this.onDeleteClick.bind(this, _id, dispatch)}
                />
              </h4>
              {showOrderInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Date: {date}</li>
                  <li className="list-group-item">Company: {companyName}</li>
                  <li className="list-group-item">Address: {address}</li>
                  <li className="list-group-item">Phone: {companyPhone}</li>
                  <li className="list-group-item">
                    Account Holder: {accountHolder}
                  </li>
                  <li className="list-group-item">
                    Account Number: {cardNumber}
                  </li>
                  <li className="list-group-item">Bank Name: {bankName}</li>
                  <li className="list-group-item">Bank Branch: {bankBranch}</li>
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Product: {productId}</li>
                  <li className="list-group-item">Total: {total} VND</li>
                  <li className="list-group-item">Status: {status}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Order.propTypes = {
  order: PropTypes.object.isRequired
};
export default Order;
