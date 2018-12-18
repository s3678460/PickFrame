import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRequests } from "../../../actions/requestActions";
import { getContributor } from "../../../actions/contributorActions";
import axios from "axios";
class Requests extends Component {
  state = {
    request: "",
    rejectionForm: "",
    rejectComplete: false
  };

  onChange = e =>
    this.setState({
      rejectionForm: [...e.target.options]
        .filter(option => option.selected)
        .map(option => option.value)
    });

  onSubmit = async e => {
    e.preventDefault();
    const message = this.state.rejectionForm;
    const imageID = this.state.request.imageID;
    const email = this.props.user.email;
    this.setState({ rejectionForm: "", rejectComplete: true });
    await axios.post("/api/form", {
      email,
      imageID,
      message
    });
  };

  onRequestClick = request => {
    this.setState({ request, rejectComplete: false }, () =>
      this.props.getContributor(request.user)
    );
  };

  componentDidMount() {
    this.props.getRequests();
  }
  render() {
    const { requests } = this.props;
    return (
      <React.Fragment>
        <div className="row my-5">
          <div className="col-md-3">
            <div className="card text-white bg-dark mb-3">
              <h5 className="card-header">Requests</h5>
              <div className="list-group card-text">
                {requests.map(request => (
                  <a
                    className="list-group-item "
                    href="#"
                    onClick={() => this.onRequestClick(request)}
                    // onClick={() =>
                    //   this.setState({ request }, () =>
                    //     this.props.getContributor(request.user)
                    //   )
                    // }
                  >
                    {request.imageID}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div
              className="card border-dark mb-3"
              style={{ minHeight: "30rem" }}
            >
              {this.state.request !== "" ? (
                <div>
                  <img
                    className="card-img-top"
                    src={
                      process.env.PUBLIC_URL +
                      `/storageimages/${this.state.request.originalImage}`
                    }
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <a
                      href="#"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#rejectModal"
                    >
                      Reject
                    </a>
                    <a href="#" className="btn btn-success">
                      Approve
                    </a>

                    {/* <!-- Modal --> */}
                    <div
                      class="modal fade"
                      id="rejectModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header text-white bg-info">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Rejection form
                            </h5>
                            <button
                              type="button"
                              className="close text-white"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            {this.state.rejectComplete ? (
                              <p className="lead">Review Completed</p>
                            ) : (
                              <form>
                                <div class="form-group row">
                                  <label
                                    for="staticEmail"
                                    class="col-md-3 col-form-label"
                                  >
                                    Email
                                  </label>
                                  <div class="col-md-9">
                                    <input
                                      type="text"
                                      readonly
                                      class="form-control-plaintext"
                                      id="staticEmail"
                                      value={this.props.user.email}
                                    />
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label
                                    for="exampleFormControlSelect1"
                                    class="col-md-3 col-form-label"
                                  >
                                    Reasons
                                  </label>
                                  <div class="col-md-9">
                                    <select
                                      multiple
                                      class="form-control"
                                      id="exampleFormControlSelect1"
                                      onChange={this.onChange}
                                    >
                                      <option>Model Release</option>
                                      <option>Visible Trademark</option>
                                      <option>Focus</option>
                                      <option>
                                        Noise, Artifacts or Film Grain
                                      </option>
                                      <option>Title</option>
                                      <option>Exposure</option>
                                      <option>Composition</option>
                                      <option>Intellectual Property</option>
                                      <option>Previously Approved Image</option>
                                      <option>Objectionable Content</option>
                                    </select>
                                  </div>
                                </div>
                              </form>
                            )}
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-dark"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            {!this.state.rejectComplete ? (
                              <button
                                type="button"
                                class="btn btn-primary"
                                onClick={this.onSubmit}
                              >
                                Email rejection
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="card-body text-center">
                  <h5 class="card-title">Process Requests</h5>
                  <p class="card-text">Select an image to review</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Requests.propTypes = {
  requests: PropTypes.array.isRequired,
  getRequests: PropTypes.func.isRequired,
  getContributor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  requests: state.request.requests,
  user: state.contributor.contributor
});

export default connect(
  mapStateToProps,
  { getRequests, getContributor }
)(Requests);
