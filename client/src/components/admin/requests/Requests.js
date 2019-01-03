import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { rejectImage, approveImage } from "../../../actions/requestActions";
import { getContributor } from "../../../actions/contributorActions";
import CheckBox from "./CheckBox";

class Requests extends Component {
  state = {
    request: "",
    showRequest: false,
    reviewComplete: false,
    reasons: [
      { id: 1, value: "Model Release", isChecked: false },
      { id: 2, value: "Visible Trademark", isChecked: false },
      { id: 3, value: "Focus", isChecked: false },
      { id: 4, value: "Noise, Artifacts or Film Grain", isChecked: false },
      { id: 5, value: "Title", isChecked: false },
      { id: 6, value: "Exposure", isChecked: false },
      { id: 7, value: "Composition", isChecked: false },
      { id: 8, value: "Intellectual Property", isChecked: false },
      { id: 9, value: "Previously Approved Image", isChecked: false },
      { id: 10, value: "Objectionable Content", isChecked: false }
    ]
  };

  handleCheckChildElement = e => {
    let reasons = this.state.reasons;
    reasons.forEach(reason => {
      if (reason.value === e.target.value) reason.isChecked = e.target.checked;
    });
    this.setState({ reasons });
  };

  approve = e => {
    e.preventDefault();
    this.setState({
      reviewComplete: true
    });
    console.log(this.state.request)
    const imageID = this.state.request.imageID;
    const email = this.props.user.email;
    const message = "approve";
    const updRequest = { ...this.state.request, isValid: true };
    this.props.approveImage(updRequest, {
      email,
      imageID,
      message
    });
  };
  reject = async e => {
    e.preventDefault();
    this.setState({
      reviewComplete: true
    });

    const message = this.state.reasons
      .filter(r => r.isChecked)
      .map(r => r.value);
    const imageID = this.state.request.imageID;
    const email = this.props.user.email;

    await this.props.rejectImage(this.state.request._id, {
      email,
      imageID,
      message
    });
  };

  onRequestClick = request => {
    this.setState(
      {
        request,
        showRequest: true,
        reviewComplete: false,
        reasons: this.state.reasons.map(r =>
          Object.assign(r, { isChecked: false })
        )
      },
      () => this.props.getContributor(request.user)
    );
  };

  render() {
    const { requests } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <div className="card text-white bg-dark mb-3">
              <h5 className="card-header">Requests</h5>
              <div className="list-group card-text">
                {requests.map((request, index) => (
                  <a
                    key={index}
                    className="list-group-item "
                    href="#"
                    onClick={() => this.onRequestClick(request)}
                  >
                    {request.imageID}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card mb-3" style={{ minHeight: "30rem" }}>
              {this.state.showRequest ? (
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
                    <a
                      href="#"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#approveModal"
                    >
                      Approve
                    </a>
                    {/* <!-- ApproveModal --> */}
                    <div
                      class="modal fade"
                      id="approveModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div
                            class="modal-header"
                            style={{ backgroundColor: "#e3f2fd" }}
                          >
                            <h5 class="modal-title" id="exampleModalLabel">
                              Approve Request
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            {this.state.reviewComplete ? (
                              <p className="lead">Review Completed</p>
                            ) : (
                                <div className="lead">
                                  Are you sure you want to approve this image?
                              </div>
                              )}
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-dark"
                              data-dismiss="modal"
                              onClick={() =>
                                this.setState({ showRequest: false })
                              }
                            >
                              Close
                            </button>
                            {!this.state.reviewComplete ? (
                              <button
                                type="button"
                                class="btn btn-primary"
                                onClick={this.approve}
                              >
                                Email Approval
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- RejectModal --> */}
                    <div
                      class="modal fade"
                      id="rejectModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div
                            class="modal-header"
                            style={{ backgroundColor: "#e3f2fd" }}
                          >
                            <h5 class="modal-title" id="exampleModalLabel">
                              Reject Request
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            {this.state.reviewComplete ? (
                              <p className="lead">Review Completed</p>
                            ) : (
                                <form>
                                  <div class="form-group row">
                                    <label
                                      htmlFor="staticEmail"
                                      class="col-md-3 col-form-label text-muted"
                                    >
                                      Email
                                  </label>
                                    <div class="col-md-9">
                                      <input
                                        type="text"
                                        readOnly
                                        class="form-control-plaintext"
                                        id="staticEmail"
                                        value={this.props.user.email}
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <label
                                      htmlFor="reasonList"
                                      class="col-md-3 col-form-label text-muted"
                                    >
                                      Reasons
                                  </label>
                                    <div class="col-md-9 text">
                                      <ul
                                        id="reasonList"
                                        className="text-left list-unstyled"
                                      >
                                        {this.state.reasons.map((reason, index) => {
                                          return (
                                            <CheckBox
                                              key={index}
                                              handleCheckChildElement={
                                                this.handleCheckChildElement
                                              }
                                              {...reason}
                                            />
                                          );
                                        })}
                                      </ul>
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
                              onClick={() =>
                                this.setState({ showRequest: false })
                              }
                            >
                              Close
                            </button>
                            {!this.state.reviewComplete ? (
                              <button
                                type="button"
                                class="btn btn-primary"
                                onClick={this.reject}
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
  rejectImage: PropTypes.func.isRequired,
  approveImage: PropTypes.func.isRequired,
  getContributor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  requests: state.request.requests,
  user: state.contributor.contributor
});

export default connect(
  mapStateToProps,
  { getContributor, rejectImage, approveImage }
)(Requests);
