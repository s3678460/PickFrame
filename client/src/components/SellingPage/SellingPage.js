import React, { Component } from 'react';
import "./SellingPage.css"
import bgImage from "../../images/demo2.jpg"
import { getImageSize } from "image-file-size"
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
import classNames from "classnames"
import { Animation } from "mdbreact"
import isEmpty from "../../validation/is-empty"

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
        var selectedFile = e.target.files[0] ? e.target.files[0] : null
        if (selectedFile) {
            console.log(true)
            getImageSize(selectedFile)
                .then(result => {
                    const height = result.height;
                    const width = result.width;
                    this.setState({
                        selectedFile,
                        selectedFileName,
                        height,
                        width
                    })
                })

        }
        else {
            this.setState({
                selectedFile: null,
                selectedFileName: "",
                height: "",
                width: ""
            })
        }
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

        const fileName = this.state.selectedFile ? `${Date.now() + '-' + this.state.selectedFile.name}` : ''
        //create new file name and save info to Mongodb
        var newImage = {
            imageID: `#${Date.now()}`,
            name: this.state.nameImage,
            price: this.state.price,
            seller: user.fullName,
            width: this.state.width.toString(),
            height: this.state.height.toString(),
            category: this.state.category,
            uploadDate: timestamp('DD/MM/YYYY'),
            originalImage: fileName,
            watermarkImage: fileName,
            idSeller: user.id
        }
        this.props.addImage(newImage, this.state.selectedFile)
        
        //get link image
        // if (!isEmpty(fileName)) {
        //     //create new file name and save info to Mongodb
        //     var newImage = {
        //         imageID: `#${Date.now()}`,
        //         name: this.state.nameImage,
        //         price: this.state.price,
        //         seller: user.fullName,
        //         width: this.state.width.toString(),
        //         height: this.state.height.toString(),
        //         category: this.state.category,
        //         uploadDate: timestamp('DD/MM/YYYY'),
        //         originalImage: fileName,
        //         watermarkImage: fileName,
        //         idSeller: user.id
        //     }
        //     this.props.addImage(newImage, this.state.selectedFile)
        //     this.clearState();
        //     window.alert("Submit successful! Your image will be examined and approved within 24 hours.")
        // } else {
        //     var newImage = {
        //         imageID: `#${Date.now()}`,
        //         name: this.state.nameImage,
        //         price: this.state.price,
        //         seller: user.fullName,
        //         width: this.state.width.toString(),
        //         height: this.state.height.toString(),
        //         category: this.state.category,
        //         uploadDate: timestamp('DD/MM/YYYY'),
        //         originalImage: '',
        //         watermarkImage: '',
        //         idSeller: user.id
        //     }
        //     this.props.addImage(newImage)
        // }
    }
    render() {
        console.log(this.state)
        var { errors } = this.state;
        return (
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="containInput">
                        <Animation type="fadeInDown">
                            <div className="container pt-5 pb-5 z-depth-5" style={{ backgroundColor: "white" }}>
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
                                                <option value="Food">Food</option>
                                                <option value="Life and Society">Life and Society</option>
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
                                                placeholder="Price in $"
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
                        </Animation>
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