import React, { Component } from 'react';
import { MDBIcon, MDBBtn } from "mdbreact"
import bgImage from "../../images/demo4.jpg"
import { connect } from "react-redux";
import {
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button
} from "mdbreact"

import {
    Label,
    Col,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    FormFeedback,
    CustomInput
} from 'reactstrap';
import classNames from "classnames"
import { getUserImages, deleteImage, updateImage, resetImages } from "../../actions/imageActions"

class CurrentSellingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageID: "",
            name: "",
            price: "",
            seller: "",
            width: "",
            height: "",
            category: "",
            uploadDate: "",
            originalImage: "",
            watermarkImage: "",
            user: "",
            errors: {},
            modal: false
        }
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) => {
        var target = e.target
        var value = target.value
        var name = target.name
        this.setState({
            [name]: value
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    componentWillMount(){
        this.props.resetImages()
    }
    componentDidMount() {
        this.props.getUserImages()
    }
    onDelete(_id, originalImage) {
        if (window.confirm('Do you want to delete this selling ?')) {
            this.props.deleteImage(_id, originalImage)
        }
    }
    handleEdit = () => {
        var {
            imageID,
            name,
            price,
            seller,
            width,
            height,
            category,
            uploadDate,
            originalImage,
            watermarkImage,
            user
        } = this.state;
        var newUpdate = {
            imageID,
            name,
            price,
            seller,
            width,
            height,
            category,
            uploadDate,
            originalImage,
            watermarkImage,
            user
        }
        this.props.updateImage(newUpdate)
        this.setState({
            modal: false
        })
    }
    onToggleEdit(image) {

        // var newImage = {
        //     imageID: `#${Date.now()}`,
        //     name: this.state.nameImage,
        //     price: this.state.price,
        //     seller: user.fullName,
        //     width: this.state.width,
        //     height: this.state.height,
        //     category: this.state.category,
        //     uploadDate: timestamp('DD/MM/YYYY'),
        //     originalImage: fileName,
        //     watermarkImage: fileName,
        //     idSeller: user.id
        // }

        this.setState({
            imageID: image.imageID,
            name: image.name,
            price: image.price,
            seller: image.seller,
            width: image.size.width,
            height: image.size.height,
            category: image.category[0],
            uploadDate: image.uploadDate,
            originalImage: image.originalImage,
            watermarkImage: image.watermarkImage,
            user: image.user
        })
        this.toggle()
    }

    render() {
        var { errors } = this.state;
        var { images } = this.props.image;
        console.log(this.state)
        //render list images
        var listImages = images.map((image, index) => {
            if(image.isValid==true){
            return (
                <div key={index} className="row pt-4">
                    <div className="col-12 hoverable" style={{ backgroundColor: "white" }}>
                        <div className="row">
                            <div className="col-6">
                                <div style={{ padding: "12px 12px 12px 0px" }}>
                                    <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={process.env.PUBLIC_URL + `/storageimages/${image.originalImage}`} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ paddingTop: "12px" }}>
                                    <h2 className="h2-responsive">{image.name}</h2>
                                    <dl className="row">
                                        <dt className="col-sm-3">ID</dt>
                                        <dd className="col-sm-9">{image.imageID}</dd>
                                        <dt className="col-sm-3">Size</dt>
                                        <dd className="col-sm-9">{image.size.width}x{image.size.height}</dd>
                                        <dt className="col-sm-3">Category</dt>
                                        <dd className="col-sm-9">{image.category[0]}</dd>
                                        <dt className="col-sm-3">Upload date</dt>
                                        <dd className="col-sm-9">{image.uploadDate}</dd>
                                        <dt className="col-sm-3">Price</dt>
                                        <dd className="col-sm-9">{image.price}$</dd>
                                    </dl>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <MDBBtn
                                                color="primary"
                                                onClick={() => this.onToggleEdit(image)}
                                            >
                                                <MDBIcon icon="edit" className="mr-1" /> Edit
                                        </MDBBtn>
                                            <MDBBtn
                                                onClick={() => this.onDelete(image._id, image.originalImage)}
                                                color="red"
                                            >
                                                Delete <MDBIcon icon="close" className="ml-1" />
                                            </MDBBtn>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }})

        return (
            <div
                className="pt-5 pb-5"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="container">
                    {/* modal */}
                    <Modal centered isOpen={this.state.modal} toggle={this.toggle} position="right">
                        <ModalHeader toggle={this.toggle}>Edite Table</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                {/* name */}
                                <FormGroup row>
                                    <Label for="nameImage" sm={2}>Name image</Label>
                                    <Col sm={10}>
                                        <Input
                                            className={classNames('', { 'is-invalid': errors.name })}
                                            value={this.state.name}
                                            id="nameImage"
                                            type="text"
                                            name="name"
                                            placeholder="Name Image"
                                            onChange={this.onChange}
                                        />
                                        {errors.name && (<FormFeedback>{errors.name}</FormFeedback>)}
                                    </Col>
                                </FormGroup>
                                {/* size width */}
                                <FormGroup row >
                                    <Label for="width" sm={2}>Width</Label>
                                    <Col sm={10}>
                                        <Input
                                            className={classNames('', { 'is-invalid': errors.sizeWidth })}
                                            value={this.state.width}
                                            type="number"
                                            name="width"
                                            id="width"
                                            placeholder="The width of your image"
                                            onChange={this.onChange}
                                        />
                                        {errors.sizeWidth && (<FormFeedback>{errors.sizeWidth}</FormFeedback>)}
                                    </Col>
                                </FormGroup>
                                {/* size height  */}
                                <FormGroup row>
                                    <Label for="height" sm={2}>Height</Label>
                                    <Col sm={10}>
                                        <Input
                                            className={classNames('', { 'is-invalid': errors.sizeHeight })}
                                            value={this.state.height}
                                            type="number"
                                            name="height"
                                            id="height"
                                            placeholder="The height of your image"
                                            onChange={this.onChange}
                                        />
                                        {errors.sizeHeight && (<FormFeedback>{errors.sizeHeight}</FormFeedback>)}
                                    </Col>
                                </FormGroup>

                                {/* Selected category */}
                                <FormGroup row>
                                    <Label for="category" sm={2}>Category</Label>
                                    <Col sm={10}>
                                        <Input
                                            className={classNames('', { 'is-invalid': errors.category })}
                                            type="select"
                                            name="category"
                                            id="category"
                                            value={this.state.category}
                                            onChange={this.onChange}
                                        >
                                            <option value="" className="text-muted">Choose your category...</option>
                                            <option value="Nature">Nature</option>
                                            <option value="Love">Love</option>
                                            <option value="Sport">Sport</option>
                                            <option value="Animal">Animal</option>
                                            <option value="Business">Business</option>
                                        </Input>
                                        {errors.category && (<FormFeedback>{errors.category}</FormFeedback>)}
                                    </Col>
                                </FormGroup>

                                {/* price */}
                                <FormGroup row>
                                    <Label for="price" sm={2}>Price</Label>
                                    <Col sm={10}>
                                        <Input
                                            className={classNames('', { 'is-invalid': errors.price })}
                                            value={this.state.price}
                                            type="number"
                                            name="price"
                                            id="price"
                                            placeholder="Price"
                                            onChange={this.onChange}
                                        />
                                        {errors.price && (<FormFeedback>{errors.price}</FormFeedback>)}
                                    </Col>
                                </FormGroup>
                                <FormGroup check row className="text-center pt-5">
                                    <Col sm={12}>
                                        <Button color="red" onClick={this.toggle}>Close</Button>
                                        <Button
                                            onClick={this.handleEdit}
                                            color="primary"
                                        >Save changes</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                    {!this.state.errors.noimage
                        ? ""
                        : (<div style={{ paddingTop: 100, paddingBottom: 100 }}>
                            <h1 className="text-center text-white">{this.state.errors.noimage ? this.state.errors.noimage : ""}</h1>
                        </div>)
                    }
                    {listImages}
                    {/* one selling */}
                    {/* <div className="row pt-4">
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
                    </div> */}

                </div>
            </div>
        );
    }
}
const mapStateTpProps = state => {
    return {
        image: state.image,
        errors: state.errors
    }
}

export default connect(mapStateTpProps, { getUserImages, deleteImage, updateImage, resetImages })(CurrentSellingPage);