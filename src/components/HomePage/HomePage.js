import React, { Component } from 'react';
import SearchField from '../SearchField/SearchField';
import Content from '../Content/Content';

class HomePage extends Component {
    render() {
        return (
            <div>
                <SearchField/>
                <Content/>
            </div>
        );
    }
}

export default HomePage;