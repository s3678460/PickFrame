import React, { Component } from 'react';
import "./ViewPage.css"
import { View, Mask } from "mdbreact"

class ViewPage extends Component {
    render() {
        const type = this.props.match.params.type
        //return view page with specific type
        switch (type) {
            case "photos":
                return (
                    <div>
                        <div>
                            <View>
                                <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="photos" style={{ width: "100%", height: "600px" }} />
                                <Mask className="flex-center">
                                    <h2 className="white-text">Plenty of photos</h2>
                                </Mask>
                            </View>
                        </div>

                        <div className="mt-5 container">
                            <div className="row">
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-3">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                                <div className="col-4">
                                    <img style={{ width: "100%", height: "200px" }} src="https://picsum.photos/1000/500" className="img-fluid" alt="Responsive image" />
                                </div>
                            </div>
                        </div>

                    </div>
                );
            case "illustrations":
                return (
                    <div>
                        <h1>illustrations</h1>
                    </div>
                );
            default:
                break;
        }
    }
}

export default ViewPage;