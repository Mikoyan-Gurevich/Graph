import React from 'react';
import ReactDOM from 'react-dom';
import Node from './node';
import Edge from './edge';
import styled from 'styled-components';

let _edges = [];
let _nodes = [];
let _maxLen = 0;
let _levelledData = {};

const TreeSVG = styled.svg`
    background-image: linear-gradient(to bottom, #FFFFFF, #e2e2e2);
`;

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

    componentWillReceiveProps(nextProps) {
        _edges = [];
        _nodes = [];
        _maxLen = 0;
        _levelledData = {};
        this.formatData(nextProps.mockData);
        this.attachPositions();
    }

    attachPositions() {
        Object.keys(_nodes).map((key) => {
            _nodes[key].cx = (_levelledData[_nodes[key].level].indexOf(_nodes[key].id) + 1) * (this.props.configuration.containerWidth / (_levelledData[_nodes[key].level].length + 1));
            _nodes[key].cy = (this.props.configuration.containerHeight * _nodes[key].level) / (Object.keys(_levelledData).length + 1);
            return _nodes[key];
        });
        let state = this.state;
        state = Object.assign(state, { nodes: _nodes, edges: _edges })
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
            <TreeSVG version="1.1" baseProfile="full" width={containerWidth} height={containerHeight} xmlns="http://www.w3.org/2000/svg">
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
            </TreeSVG>
        );
    }
}

export default Tree;