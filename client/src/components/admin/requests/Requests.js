import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRequests } from "../../../actions/requestActions";

class Requests extends Component {
  state = {
    request: ""
  };
  componentDidMount() {
    this.props.getRequests();
  }
  render() {
    const { requests } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">
          <div class="list-group">
            {requests.map(request => (
              <a
                class="list-group-item"
                href="#"
                onClick={() => this.setState({ request })}
              >
                {request.imageID}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-8" />
      </div>
    );
  }
}

Requests.propTypes = {
  requests: PropTypes.array.isRequired,
  getRequests: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  requests: state.request.requests
});

export default connect(
  mapStateToProps,
  { getRequests }
)(Requests);
