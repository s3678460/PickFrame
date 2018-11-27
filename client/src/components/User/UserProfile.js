import React, { Component } from 'react';
import axios from "axios"
import { connect } from "react-redux";
import { getImages, deleteImage, addImage } from "../../actions/imageActions"
import path from "path"
import StorageImages from "../../images"

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
        console.log(this.state)
        // const fd = new FormData();
        // // const config = {
        // //     headers: {
        // //         'content-type': 'multipart/form-data'
        // //     }
        // // }
        // fd.append('uploadimage', this.state.selectedFile, this.state.selectedFile.name)
        // axios.post(`http://localhost:5000/api/uploadimages`, fd)
        //     .then(res => {
        //         var newImages = {
        //             imageID: "abc",
        //             name: "Logo",
        //             price: "2000",
        //             seller: "Lee Khanh",
        //             size: "2000",
        //             uploadDate: "1/12/2018",
        //             originalImage: res.data,
        //             watermarkImage: res.data,
        //             idSeller: "#123"
        //         }
        //         axios.post(`http://localhost:5000/api/images`, newImages)
        //     })
    }
    render() {
        const { images } = this.props.image;
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
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <img src={StorageImages}/>
                            </div>
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