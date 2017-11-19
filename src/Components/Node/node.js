import React from 'react';
import ReactDOM from 'react-dom';


class Node extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <g>
                <circle
                    cx={this.props.node.cx}
                    cy={this.props.node.cy}
                    r={this.props.node.r}
                    fill={this.props.nodeColor}
                />
                <text
                    x={this.props.text.x}
                    y={this.props.text.y}
                    fontSize={this.props.fontSize}
                    textAnchor="middle"
                    fill={this.props.textColor}
                >{this.props.text.text}
                </text>
            </g>
        );
    }
}

export default Node;