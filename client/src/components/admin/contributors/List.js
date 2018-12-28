import React, { Component } from "react";
import Item from "./ContributorDetails";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getContributors,
  getContributor
} from "../../../actions/contributorActions";

class List extends Component {
  state = {
    blank: true
  };
  componentDidMount() {
    this.props.getContributors();
  }

  handleClick = _id => {
    this.setState({ blank: false });
    this.props.getContributor(_id);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-dark mb-3">
            <h5 className="card-header">Contributors</h5>
            <div className="list-group card-text">
              {users.map(user => (
                <a
                  className="list-group-item "
                  href="#"
                  onClick={() => this.handleClick(user._id)}
                >
                  {user._id}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-9">{this.state.blank ? null : <Item />}</div>
      </div>
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
  { getContributors, getContributor }
)(List);
