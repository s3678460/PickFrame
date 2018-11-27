import React, { Component } from 'react';
import axios from "axios"

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            imagePreviewUrl: ""
        }
    }
    handleFileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        fd.append('uploadimage', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(`http://localhost:5000/api/uploadimages`, fd)
            .then(res => {
                var newImages = {
                    imageID: "abc",
                    name: "Logo",
                    price: "2000",
                    seller: "Lee Khanh",
                    size: "2000",
                    uploadDate: "1/12/2018",
                    originalImage: res.data,
                    watermarkImage: res.data,
                    idSeller: "#123"
                }
                axios.post(`http://localhost:5000/api/images`, newImages)
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <legend>Form title</legend>
                    <div className="form-group">
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
        );
    }
}

export default UserProfile;