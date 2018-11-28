import React, { Component } from 'react';
import axios from "axios"
import { connect } from "react-redux";
import { getImages, deleteImage, addImage } from "../../actions/imageActions"

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            photoName: ""
        }
    }

    componentDidMount() {
        this.props.getImages();
    }
    handleFileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    onDelete(idImage){
        var deletedImage = {
            imageLink: idImage
        }
        axios.post("api/deleteimages", deletedImage)
        .then(res => {
            console.log(res)
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
        var { photoName } = this.state;
        console.log(this.state.selectedFile.size.toString())
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
                    imageID: "abc",
                    name: photoName,
                    price: "2000",
                    seller: "Lee Khanh",
                    size: this.state.selectedFile.size.toString(),
                    uploadDate: "1/12/2018",
                    originalImage: res.data,
                    watermarkImage: res.data,
                    idSeller: "#123"
                }
                this.props.addImage(newImage)
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
                        onClick={()=> this.onDelete(image._id)}
                        type="button" 
                        className="btn btn-primary btn-lg"
                        >Delete</button>
                    </div>
                </div>
            )
        })
        console.log(images)
        return (
            <div>
                <div className="container" style={{ padding: 20 }}>
                    <form onSubmit={this.onSubmit} >
                        <legend>Selling Photo</legend>
                        <div className="form-group">
                            <label for="">Name Photo</label>
                            <input
                                type="text"
                                name="photoName"
                                className="form-control"
                                placeholder="Name Photo"
                                onChange={this.onChange}
                            />
                            <label for="">Upload your photo</label>
                            <input
                                type="file"
                                name="file"
                                className="form-control"
                                id="file"
                                placeholder="File Upload"
                                onChange={this.handleFileChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </form>
                </div>
                <div className="container" style={{ padding: 20 }}>
                    <h1 className="text-center mb-5">List Images</h1>
                    <div className="row">
                        {showImages}
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