import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './main.scss';
import Node from './Components/Node/node';
import Edge from './Components/Edge/edge';
import mockData from '../src/mockData.json';

OfflinePluginRuntime.install();

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = Object.assign({}, mockData);
    }

    render() {
        const { nodeColor, textFontSize, textColor, nodes, edges, edgeColor, edgeThickness, nodeRadius, containerWidth, containerHeight } = this.state;
        return (
            <div>
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
            </div>
        );
    }
}

ReactDOM.render(<HomePage />, document.getElementById('app'));