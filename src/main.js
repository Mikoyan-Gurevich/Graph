import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './main.scss';
import Node from './Components/Node/node';
import Edge from './Components/Edge/edge';

OfflinePluginRuntime.install();

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            nodeColor: 'rgb(70, 70, 70)',
            textFontSize: 25,
            textColor: 'white',
            edgeColor: 'orange',
            edgeThickness: '5',
            edges: [
                {
                    from: 1,
                    to: 2
                },
                {
                    from: 1,
                    to: 3
                }
            ],
            nodes: {
                1: {
                    id: 1,
                    node: {
                        cx: 500,
                        cy: 50,
                        r: 25
                    },
                    text: {
                        x: 500,
                        y: 59,
                        text: 'A'
                    }

                },
                2: {
                    id: 2,
                    node: {
                        cx: 380,
                        cy: 140,
                        r: 25
                    },
                    text: {
                        x: 380,
                        y: 149,
                        text: 'B'
                    }

                },
                3: {
                    id: 2,
                    node: {
                        cx: 620,
                        cy: 140,
                        r: 25
                    },
                    text: {
                        x: 620,
                        y: 149,
                        text: 'C'
                    }

                }
            }
        };
    }

    render() {
        const { nodeColor, textFontSize, textColor, nodes, edges, edgeColor, edgeThickness } = this.state;
        return (
            <div>
                <svg version="1.1" baseProfile="full" width="1000" height="600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="rgb(244, 244, 244)" style={{ 'stroke': 'currentColor' }} />
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
                                node={nodes[n].node}
                                textColor={textColor}
                                fontSize={textFontSize}
                                text={nodes[n].text}
                            />
                        );
                    })}
                </svg>
            </div>
        );
    }
}

ReactDOM.render(<HomePage />, document.getElementById('app'));