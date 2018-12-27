import React, { Component } from "react";
import Order from "./Order";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrders } from "../../../actions/orderActions";
import "./Orders.css";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { orders } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div class="nav flex-column nav-pills col-sm-3" id="v-pills-tab">
            <a class="nav-link active" data-toggle="pill" href="#v-pills-all">
              All Orders
            </a>
            <a class="nav-link" data-toggle="pill" href="#v-pills-pending">
              Pending
            </a>
            <a class="nav-link" data-toggle="pill" href="#v-pills-awaiting">
              Awaiting Payment
            </a>
            <a class="nav-link" data-toggle="pill" href="#v-pills-completed">
              Completed
            </a>
          </div>
          <div class="tab-content col-sm-9" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-all">
              {orders.map(order => (
                <Order key={order.id} order={order} />
              ))}
            </div>
            <div class="tab-pane fade" id="v-pills-pending">
              {orders
                .filter(order => order.status === "Pending")
                .map(order => (
                  <Order key={order.id} order={order} />
                ))}
            </div>
            <div class="tab-pane fade" id="v-pills-awaiting">
              {orders
                .filter(order => order.status === "Awaiting Payment")
                .map(order => (
                  <Order key={order.id} order={order} />
                ))}
            </div>
            <div class="tab-pane fade" id="v-pills-completed">
              {orders
                .filter(order => order.status === "Completed")
                .map(order => (
                  <Order key={order.id} order={order} />
                ))}
            </div>
          </div>
        </div>
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
