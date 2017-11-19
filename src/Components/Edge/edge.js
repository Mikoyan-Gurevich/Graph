import React from 'react';
import ReactDOM from 'react-dom';


class Edge extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { nodes, from, to } = this.props;
        return (
            <line
                x1={nodes[from].node.cx}
                x2={nodes[to].node.cx}
                y1={nodes[from].node.cy}
                y2={nodes[to].node.cy}
                stroke={this.props.edgeColor}
                strokeWidth={this.props.edgeThickness}
            />
        );
    }
}

export default Edge;