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
                    <div className="pb-5">
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
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                    {/* <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div> */}
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            case "illustrations":
                return (
                    <div className="pb-5">
                        <div>
                            <View>
                                <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="photos" style={{ width: "100%", height: "600px" }} />
                                <Mask className="flex-center">
                                    <h2 className="white-text">Plenty of illustrations</h2>
                                </Mask>
                            </View>
                        </div>
                        <div className="mt-5 container">
                            <div className="row">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "vectors":
                return (
                    <div className="pb-5">
                        <div>
                            <View>
                                <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="photos" style={{ width: "100%", height: "600px" }} />
                                <Mask className="flex-center">
                                    <h2 className="white-text">Plenty of vectors</h2>
                                </Mask>
                            </View>
                        </div>
                        <div className="mt-5 container">
                            <div className="row">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="containerImage">
                                        <img src="https://picsum.photos/1000/500/?random" alt="Avatar" className="imageCata" />
                                        <div className="overlayCata">Category type</div>
                                        <div className="overlayID">#123456</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <h1>Page not found</h1>
                );
        }
    }
}

export default ViewPage;