import React, { Component } from 'react';

class ViewPage extends Component {
    render() {
        const type = this.props.match.params.type
        return (
            <div>
                <h1>{type}</h1>
            </div>
        );
    }
}

export default ViewPage;