import React, { Component } from 'react';
import ReactDOM from "react-dom"
import "./ViewPageType.css";
import { View, Mask } from "mdbreact";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { getImages } from "../../actions/imageActions"
import bgforViewPage from "../../images/bgforViewPage.jpg"
import { Collapse, Label, Fade } from "reactstrap"
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
            nameKey: '',
            collapse: false,
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
    onFilter = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
        })
    }
    onChangeNameKey = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            nameKey: value,
        })
    }
    handleClearFilter = () => {
        this.setState({
            categoryKey: '',
            nameKey: ''
        })
    }
    render() {
        var { images } = this.props.image;
        var { categoryKey, nameKey } = this.state;
        console.log(this.state.categoryKey)
        if (this.state.isRedirect) {
            return <Redirect to={`/details/` + this.state._idImage} />
        }
        //filter by name key
        images = images.filter((image) => {
            return image.name.toLowerCase().indexOf(nameKey.toLowerCase()) !== -1
        })

        //filter by category
        // images = images.filter((image) => {
        //     if (image.category[0] === categoryKey) {
        //         return true
        //     }
        //     return false
        // })
        if (!(this.state.categoryKey === '')) {
            images = images.filter((image) => {
                return image.category[0] === this.state.categoryKey
            })
        }

        var checkExistFilter = (this.state.categoryKey === '' && this.state.nameKey === '') ? false : true

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
                            <Button color="black" onClick={this.onFilter}>{this.state.collapse ? 'Close Filter' : 'Filter'}</Button>
                            <div className="pull-right">
                                <Fade in={checkExistFilter}>
                                    <Button color="danger" onClick={this.handleClearFilter}>Clear Filter</Button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Collapse isOpen={this.state.collapse}>
                            <div className="col-12 ml-2 mr-2" >
                                <div>
                                    {/* Filter by Name */}
                                    <FormGroup row>
                                        <Label for="nameKey" sm={2} style={{ fontWeight: "bold" }}>Name</Label>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="nameKey"
                                                id="nameKey"
                                                value={this.state.nameKey}
                                                onChange={this.onChangeNameKey}
                                            />
                                        </Col>
                                    </FormGroup>
                                    {/* Filter category */}
                                    <FormGroup row>
                                        <Label for="category" sm={2} style={{ fontWeight: "bold" }}>Category</Label>
                                        <Col sm={12}>
                                            <Input
                                                type="select"
                                                name="categoryKey"
                                                id="category"
                                                value={this.state.categoryKey}
                                                onChange={this.onChange}
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
                                </div>
                            </div>
                        </Collapse>
                        <div className="col-12">
                            <Gallery
                                margin={8}
                                photos={listImages}
                                direction={'row'}
                                onClick={this.handleClickImage}
                            />
                        </div>
                    </div>

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