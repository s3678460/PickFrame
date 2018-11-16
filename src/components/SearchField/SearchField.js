import React, { Component } from 'react';
import demoimage from '../../images/demoimage.jpg'
import './SearchField.css'
import { Fa, Button, FormInline, Input } from 'mdbreact'

class SearchField extends Component {
    render() {
        return (
            <div className="containerSearch">
                <img src={demoimage} className="mx-auto d-block" alt="demoimage" width="100%" height="700px"/>
                <div className="centered" style={{ width: "60%" }}>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><Fa icon="search" size="lg"/></button>
                </div>
            </div>
        );
    }
}

export default SearchField;