import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrders } from "../../actions/orderActions";
import { getRequests } from "../../actions/requestActions";
import { getContributors } from "../../actions/contributorActions";

class Dashboard extends Component {
  state = {
    start: _1week,
    period: "1 week"
  };
  async componentDidMount() {
    await this.props.getOrders();
    await this.props.getRequests();
    await this.props.getContributors();
  }
  getOrdersCount = () => {
    switch (this.state.period) {
      case "1 week":
        return this.props.orders_cnt_1week;
      case "24 hours":
        return this.props.orders_cnt_24hours;
      case "3 days":
        return this.props.orders_cnt_3days;
      case "1 month":
        return this.props.orders_cnt_1month;
      default:
        return null;
    }
  };
  getRequestsCount = () => {
    switch (this.state.period) {
      case "1 week":
        return this.props.requests_cnt_1week;
      case "24 hours":
        return this.props.requests_cnt_24hours;
      case "3 days":
        return this.props.requests_cnt_3days;
      case "1 month":
        return this.props.requests_cnt_1month;
      default:
        return null;
    }
  };
  getUsersCount = () => {
    switch (this.state.period) {
      case "1 week":
        return this.props.users_cnt_1week;
      case "24 hours":
        return this.props.users_cnt_24hours;
      case "3 days":
        return this.props.users_cnt_3days;
      case "1 month":
        return this.props.users_cnt_1month;
      default:
        return null;
    }
  };
  render() {
    const orders_cnt = this.getOrdersCount();
    const requests_cnt = this.getRequestsCount();
    const users_cnt = this.getUsersCount();
    return (
      <React.Fragment>
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3>
              {this.state.start} - {end}
            </h3>
          </div>
          <div className="col-md-4">
            <div class="dropdown pull-right">
              <button
                class="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                Period: {this.state.period}
              </button>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() =>
                    this.setState({ start: _24hours, period: "24 hours" })
                  }
                >
                  24 hours
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() =>
                    this.setState({ start: _3days, period: "3 days" })
                  }
                >
                  3 days
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() =>
                    this.setState({ start: _1week, period: "1 week" })
                  }
                >
                  1 week
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() =>
                    this.setState({ start: _1month, period: "1 month" })
                  }
                >
                  1 month
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-light text-center py-4 my-4">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fas fa-users" /> {users_cnt}
                </h4>
                <h5 class="card-subtitle mb-2 text-muted">New Contributors</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light text-center py-4 my-4">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fas fa-warehouse" /> {orders_cnt}
                </h4>
                <h5 class="card-subtitle mb-2 text-muted">Orders</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light text-center py-4 my-4">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fas fa-images" /> {requests_cnt}
                </h4>
                <h5 class="card-subtitle mb-2 text-muted">Requests</h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const end = new Date(
  new Date().getTime() - 1 * 24 * 60 * 60 * 1000
).toDateString();
const _24hours = new Date(
  new Date().getTime() - 2 * 24 * 60 * 60 * 1000
).toDateString();
const _3days = new Date(
  new Date().getTime() - 4 * 24 * 60 * 60 * 1000
).toDateString();
const _1week = new Date(
  new Date().getTime() - 8 * 24 * 60 * 60 * 1000
).toDateString();
const _1month = new Date(
  new Date().getTime() - 31 * 24 * 60 * 60 * 1000
).toDateString();

const mapStateToProps = state => ({
  orders_cnt_24hours: state.order.cnt_24hours,
  orders_cnt_3days: state.order.cnt_3days,
  orders_cnt_1week: state.order.cnt_1week,
  orders_cnt_1month: state.order.cnt_1month,

  requests_cnt_24hours: state.request.cnt_24hours,
  requests_cnt_3days: state.request.cnt_3days,
  requests_cnt_1week: state.request.cnt_1week,
  requests_cnt_1month: state.request.cnt_1month,

  users_cnt_24hours: state.contributor.cnt_24hours,
  users_cnt_3days: state.contributor.cnt_3days,
  users_cnt_1week: state.contributor.cnt_1week,
  users_cnt_1month: state.contributor.cnt_1month
});
export default connect(
  mapStateToProps,
  { getOrders, getRequests, getContributors }
)(Dashboard);
