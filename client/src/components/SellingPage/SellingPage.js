import React, { Component } from 'react';
import {
    Col,
    Button,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    FormFeedback,
    CustomInput
} from 'reactstrap';
import { connect } from "react-redux";
import timestamp from "time-stamp"
import { addImage } from "../../actions/imageActions"
import axios from "axios"
import classNames from "classnames"

class SellingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            selectedFileName: "",
            nameImage: "",
            price: "",
            width: "",
            height: "",
            category: "",
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    clearState = () => {
        this.setState({
            selectedFile: null,
            selectedFileName: "",
            nameImage: "",
            price: "",
            width: "",
            height: "",
            category: "",
            errors: {}
        })
    }

    handleFileChange = (e) => {
        var selectedFileName = e.target.files[0] ? e.target.files[0].name : ""
        this.setState({
            selectedFile: e.target.files[0],
            selectedFileName
        })
    }

    onChange = (e) => {
        var target = e.target
        var value = target.value
        var name = target.name
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        //get infor of current user
        var { user } = this.props.auth

        //get link image
        if (this.state.selectedFile) {
            //create new file name and save info to Mongodb
            const fileName = `${Date.now() + '-' + this.state.selectedFile.name}`
            var newImage = {
                imageID: `#${Date.now()}`,
                name: this.state.nameImage,
                price: this.state.price,
                seller: user.fullName,
                width: this.state.width,
                height: this.state.height,
                category: this.state.category,
                uploadDate: timestamp('DD/MM/YYYY'),
                originalImage: fileName,
                watermarkImage: fileName,
                idSeller: user.id
            }
            this.props.addImage(newImage, this.state.selectedFile)
            this.clearState();
        } else {
            var newImage = {
                imageID: `#${Date.now()}`,
                name: this.state.nameImage,
                price: this.state.price,
                seller: user.fullName,
                width: this.state.width,
                height: this.state.height,
                category: this.state.category,
                uploadDate: timestamp('DD/MM/YYYY'),
                originalImage: '',
                watermarkImage: '',
                idSeller: user.id
            }
            this.props.addImage(newImage)
        }
    }
    render() {
        var { errors } = this.state;
        return (
            <div>
                <div className="container mt-4 mb-4" style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                    <div className="container pt-5 pb-5" style={{ backgroundColor: "white" }}>
                        <h1 className="text-center mb-5">Selling New Image</h1>
                        <Form onSubmit={this.onSubmit}>
                            {/* name */}
                            <FormGroup row>
                                {/* <Label for="nameImage" sm={2}>Name image</Label> */}
                                <Col sm={12}>
                                    <Input
                                        className={classNames('', { 'is-invalid': errors.name })}
                                        value={this.state.nameImage}
                                        id="nameImage"
                                        type="text"
                                        name="nameImage"
                                        placeholder="Name Image"
                                        onChange={this.onChange}
                                    />
                                    {errors.name && (<FormFeedback>{errors.name}</FormFeedback>)}
                                </Col>
                            </FormGroup>
                            {/* size width */}
                            <FormGroup row >
                                {/* <Label for="width" sm={2}>Width</Label> */}
                                <Col sm={12}>
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
                                {/* <Label for="height" sm={2}>Height</Label> */}
                                <Col sm={12}>
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
                                {/* <Label for="category" sm={2}>Category</Label> */}
                                <Col sm={12}>
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
                                {/* <Label for="price" sm={2}>Price</Label> */}
                                <Col sm={12}>
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
                            <FormGroup row>
                                <Col sm={12}>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        name="file"
                                        id="yourimage"
                                        onChange={this.handleFileChange}
                                        ref={fileInput => this.fileInput = fileInput}
                                    />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <Button
                                                size="sm"
                                                color="default"
                                                onClick={() => this.fileInput.click()}
                                            >Upload</Button></InputGroupAddon>
                                        <Input
                                            placeholder="Upload your image!!!"
                                            disabled
                                            className={classNames('', { 'is-invalid': errors.originalImage })}
                                            type="text"
                                            name="selectedFileName"
                                            value={this.state.selectedFileName}
                                            onChange={this.onChange}
                                        />
                                        {errors.originalImage && (<FormFeedback>{errors.originalImage}</FormFeedback>)}
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup check row className="text-center pt-5">
                                <Col sm={12}>
                                    <Button color="default" >Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        image: state.image,
        errors: state.errors,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { addImage })(SellingPage);