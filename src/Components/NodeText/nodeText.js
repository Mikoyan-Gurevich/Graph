import React from 'react';
import ReactDOM from 'react-dom';


class Node extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <text x={this.props.text.x} y={this.props.text.y} fontSize={this.props.fontSize} textAnchor="middle" fill={this.props.color}>{this.props.text.text}</text>
        );
    }
}

export default Node;