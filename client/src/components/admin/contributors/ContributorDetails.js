import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContributor } from "../../../actions/contributorActions";

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
    balance: ""
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

  render() {
    const { contributor } = this.props;
    return (
      <div>
        <h1>{contributor.fullName}</h1>
      </div>
    );
  }
}

ContributorDetails.propTypes = {
  contributor: PropTypes.object.isRequired,
  getContributor: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contributor: state.contributor.contributor
});
export default connect(
  mapStateToProps,
  { getContributor }
)(ContributorDetails);
