import React, { Component } from 'react';
import axios from "axios"
import "./UserProfile.css"
import { connect } from "react-redux";
import { getImages, deleteImage, addImage } from "../../actions/imageActions"
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBFileInput } from "mdbreact";
import timestamp from "time-stamp"

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            nameimage: "",
            price: ""

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
        axios.post("/api/deleteimages", deletedImage)

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
        var { photoName } = this.state;
        const fd = new FormData();
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        fd.append('uploadimage', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(`http://localhost:5000/api/uploadimages`, fd)
            .then(res => {
                var newImage = {
                    imageID: `#${Date.now()}`,
                    name: this.state.nameimage,
                    price: this.state.price,
                    seller: "Lee Khanh",
                    size: this.state.selectedFile.size.toString(),
                    uploadDate: timestamp('DD/MM/YYYY'),
                    originalImage: res.data,
                    watermarkImage: res.data,
                    idSeller: "#123"
                }
                this.props.addImage(newImage)
                this.clearState();
            })
    }
    render() {
        const { images } = this.props.image;
        var showImages = images.map((image, index) => {
            return (
                <div key={index} className="col-6">
                    <div style={{ backgroundColor: "white", padding: "7px" }}>
                        <img
                            className="img-fluid"
                            src={process.env.PUBLIC_URL + `/storageimages/${image.originalImage}`}
                        />
                        <h1 className="text-center mt-3">{image.name}</h1>
                        <button
                            onClick={() => this.onDelete(image._id, image.originalImage)}
                            type="button"
                            className="btn btn-primary btn-lg"
                        >Delete</button>
                    </div>
                </div>
            )
        })
        console.log(images)
        return (
            // <div>
            //     <div className="container" style={{ padding: 20 }}>
            //         <form onSubmit={this.onSubmit} >
            //             <legend>Selling Photo</legend>
            //             <div className="form-group">
            //                 <label for="">Name Photo</label>
            //                 <input
            //                     type="text"
            //                     name="photoName"
            //                     className="form-control"
            //                     placeholder="Name Photo"
            //                     onChange={this.onChange}
            //                 />
            //                 <label for="">Upload your photo</label>
            //                 <input
            //                     type="file"
            //                     name="file"
            //                     className="form-control"
            //                     id="file"
            //                     placeholder="File Upload"
            //                     onChange={this.handleFileChange}
            //                 />
            //             </div>
            //             <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            //         </form>
            //     </div>
            //     <div className="container" style={{ padding: 20 }}>
            //         <h1 className="text-center mb-5">List Images</h1>
            //         <div className="row">
            //             {showImages}
            //         </div>
            //     </div>
            // </div>
            <div>
                <div className="container mt-4 mb-4" style={{ paddingLeft: "25%", paddingRight: "25%" }}>
                    <div className="container pt-5 pb-5" style={{ backgroundColor: "white" }}>
                        <form onSubmit={this.onSubmit}>
                            <p className="h3 text-center mb-5">Selling New Image</p>
                            <div className="grey-text">
                                <MDBInput
                                    name="nameimage"
                                    value={this.state.nameimage}
                                    onChange={this.onChange}
                                    label="Name of Image"
                                    group
                                    type="text"
                                />
                                <MDBInput
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                    label="Price"
                                    group
                                    type="number"
                                />

                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    name="file"
                                    className="form-control"
                                    id="file"
                                    placeholder="File Upload"
                                    onChange={this.handleFileChange}
                                    ref={fileInput => this.fileInput = fileInput}
                                />
                                <div className="md-form input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button
                                            onClick={() => this.fileInput.click()}
                                            className="btn btn-md btn-default m-0 px-3"
                                            type="button"
                                            id="MaterialButton-addon1">Upload</button>
                                    </div>
                                    <input
                                        disabled
                                        value={this.state.selectedFile ? this.state.selectedFile.name : ""}
                                        type="text"
                                        className="form-control"
                                        placeholder="Upload your image"
                                        aria-describedby="MaterialButton-addon1" />
                                </div>
                            </div>
                            <div className="text-center">
                                <MDBBtn type="submit">Sell</MDBBtn>
                            </div>
                        </form>
                    </div>

                </div>
                {/* <div>
                    <form className="border border-light p-5">
                        <p className="h4 mb-4 text-center">Sign in</p>
                        <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                        
                        <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                    </form>
                    <p>Enter your HTML here</p>
                </div> */}

                <div className="mt-5">
                    <div className="container" style={{ padding: 20 }}>
                        <h1 className="text-center mb-5">List Images</h1>
                        <div className="row">
                            {showImages}
                        </div>
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

export default connect(mapStateToProps, { getImages, deleteImage, addImage })(UserProfile);