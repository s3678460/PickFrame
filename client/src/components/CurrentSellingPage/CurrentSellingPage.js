import React, { Component } from 'react';
import {MDBIcon, MDBBtn} from "mdbreact"

class CurrentSellingPage extends Component {
    render() {
        return (
            <div className="pt-5 pb-5">
                <div className="container">
                    {/* one selling */}
                    <div className="row pt-4">
                        <div className="col-12 hoverable">
                            <div className="row">
                                <div className="col-6">
                                    <div style={{ padding: "12px 12px 12px 0px" }}>
                                        <img src="https://picsum.photos/500/300/?random" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div style={{ paddingTop: "12px" }}>
                                        <h2 className="h2-responsive">Dogs and Family</h2>
                                        <dl className="row">
                                            <dt className="col-sm-3">ID</dt>
                                            <dd className="col-sm-9">#123456</dd>
                                            <dt className="col-sm-3">Size</dt>
                                            <dd className="col-sm-9">1920x1080</dd>
                                            <dt className="col-sm-3">Category</dt>
                                            <dd className="col-sm-9">Natural</dd>
                                            <dt className="col-sm-3">Upload date</dt>
                                            <dd className="col-sm-9">20/11/2018</dd>
                                            <dt className="col-sm-3">Price</dt>
                                            <dd className="col-sm-9">2000$</dd>
                                        </dl>
                                        <MDBBtn color="primary">
                                            <MDBIcon icon="edit" className="mr-1" /> Edit
                                        </MDBBtn>
                                        <MDBBtn color="red">
                                            Delete <MDBIcon icon="close" className="ml-1" />
                                        </MDBBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* one selling */}
                    <div className="row pt-4">
                        <div className="col-12 hoverable">
                            <div className="row">
                                <div className="col-6">
                                    <div style={{ padding: "12px 12px 12px 0px" }}>
                                        <img src="https://picsum.photos/500/300/?random" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div style={{ paddingTop: "12px" }}>
                                        <dl className="row">
                                            <dt className="col-sm-3">Description lists</dt>
                                            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                                            <dt className="col-sm-3">Euismod</dt>
                                            <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                            <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

                                            <dt className="col-sm-3">Malesuada porta</dt>
                                            <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                            <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentSellingPage;