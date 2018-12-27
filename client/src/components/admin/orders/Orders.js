import React, { Component } from "react";
import Order from "./Order";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrders } from "../../../actions/orderActions";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { orders } = this.props;
    return (
      <React.Fragment>
        {orders.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </React.Fragment>
    );
  }
}

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
  getOrders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  orders: state.order.orders
});

export default connect(
  mapStateToProps,
  { getOrders }
)(Orders);
