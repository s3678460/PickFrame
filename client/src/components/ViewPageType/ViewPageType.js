import React, { Component } from 'react';
import ReactDOM from "react-dom"
import "./ViewPageType.css";
import { View, Mask } from "mdbreact";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { getImages } from "../../actions/imageActions"
import bgforViewPage from "../../images/bgforViewPage.jpg"
import { } from "reactstrap"
import Gallery from "react-photo-gallery";
import { FormGroup, Col, Input, Button } from "reactstrap";

class ViewPageType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _idImage: '',
            isRedirect: false,
            showFilter: false,
            categoryKey: '',
            isFilter: false,
        }
    }
    componentDidMount() {
        this.props.getImages();
    }

    handleClickImage = (event, obj) => {
        this.setState({
            _idImage: obj.photo._id,
            isRedirect: true
        })
    }
    handlFilter = () => {
        this.setState({
            showFilter: !this.state.showFilter
        })
    }
    handleFilterCategory = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            categoryKey: value,
            isFilter: true
        })
    }
    handleClearFilter = () => {
        this.setState({
            isFilter: false,
            categoryKey: ''
        })
    }
    render() {
        var { images } = this.props.image;
        console.log(this.state.categoryKey)
        if (this.state.isRedirect) {
            return <Redirect to={`/details/` + this.state._idImage} />
        }
        //filter by category
        if (!(this.state.categoryKey === '')) {
            images = images.filter((image) => {
                return image.category[0] === this.state.categoryKey
            })
        }



        //return images
        // var listImages = images.map((image, index) => {
        //     return <div key={index} className="col-4 pt-4">
        //         <Link to={`/details/${image._id}`}>
        //             <div className="containerImage hoverable">
        //                 <img
        //                     src={process.env.PUBLIC_URL + `/storageimages/${image.originalImage}`}
        //                     alt={image.name}
        //                     className="imageCata"
        //                 />
        //                 <div className="overlayCata">{image.name}</div>
        //                 <div className="overlayID">{image.imageID}</div>
        //             </div>
        //         </Link>
        //     </div>
        // })
        var listImages = [];
        images.map((image) => {
            listImages.push({
                src: `${process.env.PUBLIC_URL}/storageimages/${image.originalImage}`,
                width: parseInt(image.size.width),
                height: parseInt(image.size.height),
                _id: image._id
            })
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
                <div className="mt-5 ml-2 mr-2">
                    <div className="row">
                        <div className="col-12">
                            <Button color="primary" onClick={this.handlFilter}>Filter</Button>
                        </div>
                    </div>
                    {this.state.showFilter
                        ? <div className="row">
                            <div className="col-2">
                                <div>
                                    <p>Filter By Category</p>
                                    {/* Selected category */}
                                    <FormGroup row>
                                        {/* <Label for="category" sm={2}>Category</Label> */}
                                        <Col sm={12}>
                                            <Input
                                                type="select"
                                                name="category"
                                                id="category"
                                                value={this.state.categoryKey}
                                                onChange={this.handleFilterCategory}
                                            >
                                                <option value="" className="text-muted">Choose your category...</option>
                                                <option value="Nature">Nature</option>
                                                <option value="Love">Love</option>
                                                <option value="Sport">Sport</option>
                                                <option value="Animal">Animal</option>
                                                <option value="Business">Business</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    {this.state.isFilter
                                        ? <Button color="primary" onClick={this.handleClearFilter} size="sm">Clear Filter</Button>
                                        : ""
                                    }
                                </div>
                            </div>
                            <div className="col-10">
                                <Gallery
                                    margin={8}
                                    photos={listImages}
                                    direction={'row'}
                                    onClick={this.handleClickImage}
                                />
                            </div>
                        </div>
                        : <div className="row">
                            <div className="col-12">
                                <Gallery
                                    margin={8}
                                    photos={listImages}
                                    direction={'row'}
                                    onClick={this.handleClickImage}
                                />
                            </div>
                        </div>
                    }

                    {/* <div className="row">
                        <div className="col-4 pt-4">
                            <Link to="/details">
                                <div className="containerImage hoverable">
                                    <img src="https://picsum.photos/1000/1000/?random" alt="Avatar" className="imageCata" />
                                    <div className="overlayCata">Category type</div>
                                    <div className="overlayID">#123456</div>
                                </div>
                            </Link>
                        </div>
                        {listImages}
                        <Gallery
                            margin={8}
                            photos={listImages}
                            direction={'row'}
                            onClick={this.handleClickImage}
                        />

                    </div> */}
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