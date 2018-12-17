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
                    onClick={() => this.setState({ request })}
                  >
                    {request.imageID}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card border-dark mb-3">
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
                  className="btn btn-outline-danger"
                  data-toggle="modal"
                  data-target="#rejectModal"
                >
                  Reject
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
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Rejection form
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
                                value="email@example.com"
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
                                class="form-control"
                                id="exampleFormControlSelect1"
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-outline-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="btn btn-outline-success">
                  Approve
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
