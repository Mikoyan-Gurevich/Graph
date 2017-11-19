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
                x1={nodes[from].cx}
                x2={nodes[to].cx}
                y1={nodes[from].cy}
                y2={nodes[to].cy}
                stroke={this.props.edgeColor}
                strokeWidth={this.props.edgeThickness}
            />
        );
    }
}

export default Edge;