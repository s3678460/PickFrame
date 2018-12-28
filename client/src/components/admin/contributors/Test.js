import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateContributor } from "../../../actions/contributorActions";
import classNames from "classnames";

class Test extends Component {
  state = {
    showOrderInfo: false
  };

  render() {
    const {
      _id,
      fullName,
      displayName,
      email,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      balance
    } = this.props.user;
    const { showOrderInfo } = this.state;

    return (
      <div className="card card-body bg-light mb-3">
        <h4>
          {fullName}{" "}
          <i
            onClick={() =>
              this.setState({ showOrderInfo: !this.state.showOrderInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>
        {showOrderInfo ? (
          <ul className="list-group ">
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-3">Display Name</div>
                <div className="col-sm-9">{displayName}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-3">Email</div>
                <div className="col-sm-9">{email}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-3">Account Holder</div>
                <div className="col-sm-9">{accountHolder}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-3">Account Number</div>
                <div className="col-sm-9">{cardNumber}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-3">Bank Name</div>
                <div className="col-sm-9">{bankName}</div>
              </div>
            </li>
            <li className="list-group-item list-group-item-light lead">
              <div className="row">
                <div className="col-sm-3">Bank Branch</div>
                <div className="col-sm-9">{bankBranch}</div>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Test.propTypes = {
  user: PropTypes.object.isRequired,
  updateContributor: PropTypes.func.isRequired
};
export default connect(
  null,
  { updateContributor }
)(Test);
