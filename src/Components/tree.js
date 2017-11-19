import React from 'react';
import ReactDOM from 'react-dom';
import Node from './node';
import Edge from './edge';

let _edges = [];
let _nodes = [];
let _maxLen = 0;
let _levelledData = {};

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.attachPositions = this.attachPositions.bind(this);
        this.state = Object.assign({}, this.props.configuration);
    }

    componentWillMount() {
        this.formatData(this.props.mockData);
        this.attachPositions();
    }

    attachPositions() {
        _nodes.map((node) => {
            node.cx = (_levelledData[node.level].indexOf(node.id) + 1) * (this.props.configuration.containerWidth / (_levelledData[node.level].length + 1));
            node.cy = (this.props.configuration.containerHeight * node.level) / (Object.keys(_levelledData).length + 1);
            return node;
        });
        let state = this.state;
        state = Object.assign(state, {nodes: _nodes, edges: _edges})
        this.setState(state);
    }

    formatData(data, level) {
        level = level || '1';
        if (!_levelledData[level]) {
            _levelledData[level] = [];
        }
        _levelledData[level].push(data.id);
        _nodes[data.id] = { id: data.id, text: data.text, level: level };
        _maxLen = Math.max(_maxLen, data.children.length);
        data.children.length > 0 && data.children.map((child) => {
            _edges.push({ from: data.id, to: child.id });
            this.formatData(child, String(Number(level) + 1));
        });
    }

    render() {
        const { nodeColor, textFontSize, textColor, nodes, edges, edgeColor, edgeThickness, nodeRadius, containerWidth, containerHeight } = this.state;
        return (
            <svg version="1.1" baseProfile="full" width={containerWidth} height={containerHeight} xmlns="http://www.w3.org/2000/svg">
            {/* For every edge there will be a line, and these lines will always be below the nodes. so we should draw lines first and then nodes. */}
            {edges.map((e, k) => {
                return <Edge
                    key={k}
                    edgeColor={edgeColor}
                    edgeThickness={edgeThickness}
                    from={e.from}
                    to={e.to}
                    nodes={nodes}
                />
            })}
            {/* For every node there should be a combination of circle and a text. */}
            {Object.keys(nodes).map((n, k) => {
                return (
                    <Node key={k}
                        nodeColor={nodeColor}
                        node={nodes[n]}
                        textColor={textColor}
                        fontSize={textFontSize}
                        nodeRadius={nodeRadius}
                    />
                );
            })}
        </svg>
        );
    }
}

export default Tree;