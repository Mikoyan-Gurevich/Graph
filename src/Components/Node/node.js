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
                    r={this.props.nodeRadius}
                    fill={this.props.nodeColor}
                />
                <text
                    x={this.props.node.cx}
                    y={this.props.node.cy + (this.props.fontSize/2.5)}
                    fontSize={this.props.fontSize}
                    textAnchor="middle"
                    fill={this.props.textColor}
                >{this.props.node.text}
                </text>
            </g>
        );
    }
}

export default Node;