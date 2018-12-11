import React, { Component } from 'react';
import './Details.css';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import ImageZoom from 'react-medium-image-zoom';
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go"
import { MDBBtn } from "mdbreact";
import { Fragment } from "react";
import Slider from 'react-slick';
import { connect } from "react-redux"
import { getImages } from "../../actions/imageActions"



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
    componentDidMount() {
        this.props.getImages()
    }

    render() {
        const { images } = this.props.image;
        const imageIDTarget = this.props.match.params._id
        const imageTarget = images.find((image) => {
            return image._id === imageIDTarget
        })

        const linkImage = process.env.PUBLIC_URL + `/storageimages/${imageTarget.originalImage}`
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
                            <h1>{imageTarget.name}</h1>
                            <h2>Nature, beach, blue, sea, vacation</h2>
                            <section className="image-card">
                                <ImageZoom
                                    image={{
                                        src: linkImage,
                                        alt: `${imageTarget.name}`,
                                        className: 'img',
                                        style: { width: '100%', height: '100%' }
                                    }}
                                    zoomImage={{
                                        src: linkImage,
                                        alt: `${imageTarget.name}`
                                    }}
                                />
                            </section>

                            <div className="text-section">
                                <div className="content-details">
                                    <p>Includes our <Link to="#">standard license</Link></p>
                                    <div className="details-information">
                                        <p><GoPerson />Credit: <Link to="/#">{imageTarget.seller}</Link> </p>
                                        <p> <b style={{ fontWeight: "bold" }}>Largest size:</b> {imageTarget.size.height} x {imageTarget.size.width}</p>
                                        <p> <b style={{ fontWeight: "bold" }}>PickFrame photo ID:</b> {imageTarget.imageID}</p>
                                        <p> <b style={{ fontWeight: "bold" }}>Upload date:</b> {imageTarget.uploadDate}</p>
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
                                        <a> <b style={{ fontWeight: "bold", paddingLeft: "3pt" }}>{imageTarget.price}$</b> for this image   </a>
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
const mapStateToProps = state => {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, { getImages })(Details);