import React from 'react';
import ReactDOM from 'react-dom';


class Node extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <circle cx={this.props.node.cx} cy={this.props.node.cy} r={this.props.node.r} fill={this.props.color} />
        );
    }
}

export default Node;