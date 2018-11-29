import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContributors } from "../../../actions/contributorActions";

class Contributors extends Component {
  componentDidMount() {
    this.props.getContributors();
  }
  render() {
    const { contributors } = this.props;

    if (contributors) {
      return (
        <div>
          <h2 className="display-4 mb-2">
            <i className="fas fa-user-ninja" /> Contributors
          </h2>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Full Name</th>
                <th>Display Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Account Holder</th>
                <th>Card Number</th>
                <th>Bank Name</th>
                <th>Bank Branch</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {contributors.map(contributor => (
                <tr key={contributor._id}>
                  <td>{contributor.fullName}</td>
                  <td>{contributor.displayName}</td>
                  <td>{contributor.email}</td>
                  <td>{contributor.password}</td>
                  <td>{contributor.accountHolder}</td>
                  <td>{contributor.cardNumber}</td>
                  <td>{contributor.bankName}</td>
                  <td>{contributor.bankBranch}</td>
                  <td>VND {contributor.balance}</td>
                  <td>
                    <Link
                      to={`/admin/${contributor._id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Contributors.propTypes = {
  contributors: PropTypes.array.isRequired,
  getContributors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contributors: state.contributor.contributors
});

export default connect(
  mapStateToProps,
  { getContributors }
)(Contributors);
