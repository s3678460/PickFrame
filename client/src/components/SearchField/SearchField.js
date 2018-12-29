import React, { Component } from 'react';
import demoimage from '../../images/demoimage.jpg'
import './SearchField.css'
import { Fa, Button, FormInline, Input } from 'mdbreact'
import { Link } from "react-router-dom";

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="containerSearch">
                <img src={demoimage} className="mx-auto d-block" alt="demoimage" width="100%" height="700px" />
                <div className="centered" style={{ width: "60%" }}>
                    <input
                        type="text"
                        value={this.state.keyword}
                        onChange={this.onChange}
                        placeholder="Search.."
                        name="keyword" />
                    <button
                        type="button"
                        onClick={() => this.searchKeyword.click()}
                    ><Fa icon="search" size="lg" /></button>
                    <Link
                        innerRef={searchKeyword => this.searchKeyword = searchKeyword}
                        to={`/view/keyword/${this.state.keyword}`
                        } />
                </div>
            </div>
        );
    }
}

export default SearchField;