import React, { Component } from 'react';

export default class Heading extends Component {
    render() {
        return (
            <div className="heading-container">
                <h1 className="heading-title">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}