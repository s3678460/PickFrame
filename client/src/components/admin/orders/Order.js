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
    const { id, date, company, cart, total, status } = this.props.order;
    const { showOrderInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                #{id}{" "}
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
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showOrderInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Date: {date}</li>
                  <li className="list-group-item">Company: {company}</li>
                  <li className="list-group-item">Cart: {cart}</li>
                  <li className="list-group-item">Total bill: {total}</li>
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
