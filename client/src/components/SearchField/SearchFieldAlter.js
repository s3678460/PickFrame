import React, { Component } from 'react';
import demoimage from '../../images/demoimage.jpg'
import "./SearchFieldAlter.css"
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
        const haveKeywords = (
            <div className="altersearch">
                <input
                    type="text"
                    value={this.state.keyword}
                    onChange={this.onChange}
                    placeholder="Browse your perfect stock images..."
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
        )
        const emptyKeywords = (
            <div className="altersearch">
                <input
                    type="text"
                    value={this.state.keyword}
                    onChange={this.onChange}
                    placeholder="Browse your perfect stock images..."
                    name="keyword" />
                <button
                    type="button"
                    onClick={() => this.searchKeyword.click()}
                ><Fa icon="search" size="lg" /></button>
                <Link
                    innerRef={searchKeyword => this.searchKeyword = searchKeyword}
                    to={`/view/all/photos`
                    } />
            </div>
        )
        return (
            <div>
                {this.state.keyword != '' ? haveKeywords : emptyKeywords}
            </div>
        );
    }
}

export default SearchField;