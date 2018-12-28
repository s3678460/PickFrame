import React, { Component } from "react";
import Test from "./Test";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContributors } from "../../../actions/contributorActions";

class List extends Component {
  componentDidMount() {
    this.props.getContributors();
  }
  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        {users.map(user => (
          <Test key={user._id} user={user} />
        ))}
      </React.Fragment>
    );
  }
}

List.propTypes = {
  users: PropTypes.array.isRequired,
  getContributors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.contributor.contributors
});

export default connect(
  mapStateToProps,
  { getContributors }
)(List);
