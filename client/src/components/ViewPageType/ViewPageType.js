import React, { Component } from 'react';
import "./ViewPageType.css";
import { View, Mask } from "mdbreact";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { getImages } from "../../actions/imageActions"
import bgforViewPage from "../../images/bgforViewPage.jpg"

class ViewPageType extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.getImages();
    }

    render() {
        const { images } = this.props.image
        //return images
        var listImages = images.map((image, index) => {
            return <div key={index} className="col-4 pt-4">
                <Link to={`/details/${image._id}`}>
                    <div className="containerImage hoverable">
                        <img 
                        src={process.env.PUBLIC_URL + `/storageimages/${image.originalImage}`} 
                        alt={image.name}
                        className="imageCata"
                        />
                        <div className="overlayCata">{image.name}</div>
                        <div className="overlayID">{image.imageID}</div>
                    </div>
                </Link>
            </div>
        })

        return (
            <div className="pb-5">
                <div>
                    <View>
                        <img src={bgforViewPage} className="img-fluid" alt="photos" style={{ width: "100%", height: "700px" }} />
                        <Mask className="flex-center">
                            <h2 className="white-text">Plenty of photos</h2>
                        </Mask>
                    </View>
                </div>
                <div className="mt-5 container">
                    <div className="row">
                        {/* one image */}
                        {/* <div className="col-4 pt-4">
                            <Link to="/details">
                                <div className="containerImage hoverable">
                                    <img src="https://picsum.photos/1000/1000/?random" alt="Avatar" className="imageCata" />
                                    <div className="overlayCata">Category type</div>
                                    <div className="overlayID">#123456</div>
                                </div>
                            </Link>
                        </div> */}
                        {listImages}

                    </div>
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

export default connect(mapStateToProps, { getImages })(ViewPageType);