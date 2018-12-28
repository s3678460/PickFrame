import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateContributor } from "../../../actions/contributorActions";
import classnames from "classnames";

class ContributorDetails extends Component {
  state = {
    balance: "",
    showBalanceUpdate: false,
    balanceUpdateAmount: ""
  };

  componentDidMount() {
    this.setState({ balance: this.props.contributor.balance });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.contributor.balance);
    if (prevProps.contributor.balance !== this.props.contributor.balance) {
      this.setState({
        balance: this.props.contributor.balance
      });
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  balanceSubmit = e => {
    e.preventDefault();
    const { contributor } = this.props;
    const { balanceUpdateAmount } = this.state;

    const contributorUpdate = {
      ...contributor,
      balance: parseInt(balanceUpdateAmount)
    };
    this.props.updateContributor(contributorUpdate);
  };

  render() {
    const {
      fullName,
      displayName,
      accountHolder,
      cardNumber,
      bankName,
      bankBranch,
      email
    } = this.props.contributor;
    const { balance, showBalanceUpdate, balanceUpdateAmount } = this.state;

    let balanceForm = "";
    if (showBalanceUpdate) {
      balanceForm = (
        <form onSubmit={this.balanceSubmit}>
          <div className="md-form input-group">
            <input
              type="text"
              className="form form-control lead"
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
        <div className="card">
          <div className="card-header">
            <h3>{fullName}</h3>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item lead">
                <div className="row">
                  <div className="col-md-3">Balance</div>
                  <div className="col-md-9">
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
                    {balanceForm}
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-3">Display Name</div>
                  <div className="col-md-9">{displayName}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-3">Email</div>
                  <div className="col-md-9">{email}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-3">Account Holder</div>
                  <div className="col-md-9">{accountHolder}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-3">Account Number</div>
                  <div className="col-md-9">{cardNumber}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-3">Bank Name</div>
                  <div className="col-md-9">{bankName}</div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-3">Bank Branch</div>
                  <div className="col-md-9">{bankBranch}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ContributorDetails.propTypes = {
  contributor: PropTypes.object.isRequired
};

ContributorDetails.defaultProps = {
  balance: 0
};

const mapStateToProps = state => ({
  contributor: state.contributor.contributor
});
export default connect(
  mapStateToProps,
  { updateContributor }
)(ContributorDetails);
