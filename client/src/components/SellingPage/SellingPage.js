import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import timestamp from "time-stamp"
import { getImages, deleteImage, addImage } from "../../actions/imageActions"
import axios from "axios"

class SellingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            nameimage: "",
            price: "",
            width: "",
            height: "",
            category: ""

        }
    }

    clearState = () => {
        this.setState({
            selectedFile: null,
            nameimage: "",
            price: ""
        })
    }
    componentDidMount() {
        this.props.getImages();
    }
    handleFileChange = (e) => {
        console.log(e.target.files[0])
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    onDelete(idImage, originalImage) {
        this.props.deleteImage(idImage)
        var deletedImage = {
            imageLink: originalImage
        }
        axios.post("/api/images/deleteimage", deletedImage)

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
        const fd = new FormData();
        console.log(this.state)
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        // fd.append('uploadimage', this.state.selectedFile, this.state.selectedFile.name)
        // axios.post(`/api/images/uploadimage`, fd)
        //     .then(res => {
        //         var newImage = {
        //             imageID: `#${Date.now()}`,
        //             name: this.state.nameimage,
        //             price: this.state.price,
        //             seller: "Lee Khanh",
        //             size: this.state.selectedFile.size.toString(),
        //             uploadDate: timestamp('DD/MM/YYYY'),
        //             originalImage: res.data,
        //             watermarkImage: res.data,
        //             idSeller: "#123"
        //         }
        //         this.props.addImage(newImage)
        //         this.clearState();
        //     })
    }
    render() {
        return (
            <div>
                <div className="container mt-4 mb-4" style={{ paddingLeft: "15%", paddingRight: "15%" }}>
                    <div className="container pt-5 pb-5" style={{ backgroundColor: "white" }}>
                        <h1 className="text-center mb-5">Selling New Image</h1>
                        <Form onSubmit={this.onSubmit}>
                            {/* name */}
                            <FormGroup row>
                                <Label for="nameimage" sm={2}>Name image</Label>
                                <Col sm={10}>
                                    <Input
                                        value={this.state.nameimage}
                                        id="nameimage"
                                        type="text"
                                        name="nameimage"
                                        placeholder="Name Image"
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </FormGroup>
                            {/* size width */}
                            <FormGroup row >
                                <Label for="width" sm={2}>Width</Label>
                                <Col sm={10}>
                                    <Input
                                        value={this.state.width}
                                        type="number"
                                        name="width"
                                        id="width"
                                        placeholder="The width of your image"
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </FormGroup>
                            {/* size height  */}
                            <FormGroup row>
                                <Label for="height" sm={2}>Height</Label>
                                <Col sm={10}>
                                    <Input
                                        value={this.state.height}
                                        type="number"
                                        name="height"
                                        id="height"
                                        placeholder="The height of your image"
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Selected category */}
                            <FormGroup row>
                                <Label for="category" sm={2}>Category</Label>
                                <Col sm={10}>
                                    <Input
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
                                </Col>
                            </FormGroup>

                            {/* price */}
                            <FormGroup row>
                                <Label for="price" sm={2}>Price</Label>
                                <Col sm={10}>
                                    <Input
                                        value={this.state.price}
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="Price"
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="yourimage" sm={2}>Your image</Label>
                                <Col sm={10}>
                                    <Input
                                        type="file"
                                        name="file"
                                        id="yourimage"
                                        onChange={this.handleFileChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
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
        image: state.image
    }
}

export default connect(mapStateToProps, { getImages })(SellingPage);