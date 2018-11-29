import React, { Component } from 'react';
import './Details.css';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import ImageZoom from 'react-medium-image-zoom';
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go"
import { MDBBtn } from "mdbreact";
import { Fragment } from "react";
import Slider from 'react-slick';
import SearchField from '../SearchField/SearchField';



class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            focusOnSelect: true,


        };
        return (
            <div className="container-fluid-detail">
            
                <div className="row">



                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="detail-inner-box-left">
                            <h1>Quite place for a proper holiday - PickFrame image
                        </h1>
                            <h2>Nature, beach, blue, sea, vacation</h2>
                            <section className="image-card">
                                <ImageZoom
                                    image={{
                                        src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/46884689_763211217360730_1995140539535589376_o.jpg?_nc_cat=106&_nc_ht=scontent.fsgn2-3.fna&oh=727bdebf208aa0eab876bfc3724d632e&oe=5C7659D1",
                                        alt: 'Golden Gate Bridge',
                                        className: 'img',
                                        style: { width: '100%', height: '100%' }
                                    }}
                                    zoomImage={{
                                        src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/46884689_763211217360730_1995140539535589376_o.jpg?_nc_cat=106&_nc_ht=scontent.fsgn2-3.fna&oh=727bdebf208aa0eab876bfc3724d632e&oe=5C7659D1",
                                        alt: 'Golden Gate Bridge'
                                    }}

                                />

                            </section>

                            <div className="text-section">
                                <div className="content-details">
                                    <p>Includes our <Link to="#">standard license</Link></p>
                                    <div className="details-information">
                                        <p><GoPerson />Credit: <Link to="/#">minhhuynh</Link> </p>
                                        <p> <b style={{ fontWeight: "bold" }}>Largest size:</b> 8688 x 4986 px (28.96 x 16.62 in.) - 300 dpi - RGB</p>
                                        <p> <b style={{ fontWeight: "bold" }}>PickFrame photo ID:</b>857902068</p>
                                        <p> <b style={{ fontWeight: "bold" }}>Upload date:</b>October 05, 2017</p>
                                    </div>


                                </div>
                            </div>

                        </div>

                    </div>


                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="detail-inner-box-right">
                            <h1>1 credit</h1>
                            <h2>Essentials collection</h2>

                            <form className="checkbox-detail">

                                <div className="radio">
                                    <label>

                                        <input type="radio" value="option1" checked={true} style={{ marginLeft: "8pt" }} />
                                        <a> <b style={{ fontWeight: "bold", paddingLeft: "3pt" }}>12$</b> for this image   </a>
                                    </label>
                                </div>
                            </form>

                            <div className="download-button">
                                <Fragment>

                                    <Link to="/checkout"><MDBBtn rounded color="danger" size="lg">Download this image</MDBBtn></Link>
                                </Fragment>
                            </div>

                            <div className="keyword">
                                <h1>Keywords</h1>
                                <span><MDBBtn color="elegant" size="sm">Nature</MDBBtn></span>
                                <span><MDBBtn color="elegant" size="sm">Beach</MDBBtn></span>
                                <span><MDBBtn color="elegant" size="sm">Vacation</MDBBtn></span>
                                <span><MDBBtn color="elegant" size="sm">Holiday</MDBBtn></span>
                            </div>






                        </div>

                    </div>






                </div>
                <div className="container-fluid-similar-image" >
                <div className="slider-images">
                    <span><b>Similar images</b> <Link to="/view/photos">View all photos  ></Link></span>
                    
                    <Slider {...settings}>

                        <div>
                            <Link to="/#"><img src="https://images7.alphacoders.com/411/thumb-1920-411820.jpg" className="img-thumbnail"></img></Link>                        </div>
                        <div>
                            <Link to="/#"><img src="http://4.bp.blogspot.com/-oxlezteeOII/TfiTImj4RlI/AAAAAAAAA1k/UAgctmU5VZo/s1600/Widescreen+Unique+And+Beautiful+Photography+%25284%2529.jpg" className="img-thumbnail" ></img></Link>                        </div>
                        <div>
                            <Link to="/#"><img src="http://hdwpro.com/wp-content/uploads/2016/12/Spring-HD-Pic.jpg" className="img-thumbnail" ></img></Link>                        </div>
                        <div>
                            <Link to="/#"><img src="http://www.wallpapereast.com/static/images/Hawaii-Beach-Wallpaper-HD_kgppCjh.jpg" className="img-thumbnail"></img></Link>                        </div>

                    </Slider></div>
                    </div>

            </div>
        );
    }
}

export default Details