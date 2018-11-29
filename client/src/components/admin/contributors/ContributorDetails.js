import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContributor } from "../../../actions/contributorActions";
import classnames from "classnames";

class ContributorDetails extends Component {
  state = {
    fullName: "",
    displayName: "",
    email: "",
    password: "",
    accountHolder: "",
    cardNumber: "",
    bankName: "",
    bankBranch: "",
    balance: "",
    showBalanceUpdate: false,
    balanceUpdateAmount: ""
  };

  componentWillReceiveProps(nextProps, nextState) {
    const {
      fullName,
      displayName,
      email,
      password,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      balance
    } = nextProps.contributor;

    this.setState({
      fullName,
      displayName,
      email,
      password,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      balance
    });
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    this.props.getContributor(_id);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  balanceSubmit = e => {
    e.preventDefault();
    console.log(this.state.balanceUpdateAmount);
  };

  render() {
    const {
      _id,
      fullName,
      password,
      displayName,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      email
      // balance
    } = this.props.contributor;
    const { balance } = this.props;
    const { showBalanceUpdate, balanceUpdateAmount } = this.state;

    let balanceForm = "";
    if (showBalanceUpdate) {
      balanceForm = (
        <form onSubmit={this.balanceSubmit}>
          <div className="md-form input-group">
            <input
              type="text"
              className="form form-control"
              name="balanceUpdateAmount"
              placeholder="Add New Balance"
              value={balanceUpdateAmount}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <input
                type="submit"
                value="Update"
                className="btn btn-outline-dark"
              />
            </div>
          </div>
        </form>
      );
    } else {
      balanceForm = null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/admin/contributors" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To DashBoard
            </Link>
          </div>
          <div className="col-md-6">
            <div className="btn-group float-right">
              <Link
                to={`/admin/contributor/edit/${_id}`}
                className="btn btn-dark"
              >
                Edit
              </Link>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="card">
          <div className="card-header">
            <h3>{fullName}</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8 col-sm-6">
                <h4>
                  Contributor ID: <span className="text-secondary">{_id}</span>
                </h4>
              </div>
              <div className="col-md-4 col-sm-6">
                <h3 className="pull-right">
                  Balance:{" "}
                  <span
                    className={classnames({
                      "text-danger": balance > 0,
                      "text-success": balance === 0
                    })}
                  >
                    VND {balance}
                  </span>
                  <small>
                    <a
                      href="#!"
                      onClick={() =>
                        this.setState({
                          showBalanceUpdate: !this.state.showBalanceUpdate
                        })
                      }
                    >
                      {" "}
                      <i className="fas fa-pencil-alt" />
                    </a>
                  </small>
                </h3>
                {balanceForm}
              </div>
            </div>
            <hr />
            <ul className="list-group">
              <li className="list-group-item">Display Name: {displayName}</li>
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Password: {password}</li>
              <li className="list-group-item">
                Account Holder: {accountHolder}
              </li>
              <li className="list-group-item">Account Number: {cardNumber}</li>
              <li className="list-group-item">Bank Name: {bankName}</li>
              <li className="list-group-item">Bank Branch: {bankBranch}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ContributorDetails.propTypes = {
  contributor: PropTypes.object.isRequired,
  getContributor: PropTypes.func.isRequired
};

ContributorDetails.defaultProps = {
  balance: 0
};

const mapStateToProps = state => ({
  contributor: state.contributor.contributor
});
export default connect(
  mapStateToProps,
  { getContributor }
)(ContributorDetails);
