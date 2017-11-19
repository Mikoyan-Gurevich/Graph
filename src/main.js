import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './main.scss';
import Node from './Components/Node/node';

OfflinePluginRuntime.install();

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            nodesColor: 'rgb(70, 70, 70)',
            textFontSize: 25,
            textColor: 'white',
            nodes: [
                {
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
                {
                    id: 1,
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
                {
                    id: 1,
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
            ]
        };
    }

    render() {
        const { nodesColor, textFontSize, textColor, nodes } = this.state;
        return (
            <div>
                <svg version="1.1" baseProfile="full" width="1000" height="600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="rgb(244, 244, 244)" style={{ 'stroke': 'currentColor' }} />
                    {/* For every edge there will be a line, and these lines will always be below the nodes. so we should draw lines first and then nodes. */}
                    <line x1="500" x2="380" y1="50" y2="140" stroke="orange" strokeWidth="5" />
                    <line x1="500" x2="620" y1="50" y2="140" stroke="orange" strokeWidth="5" />
                    {/* For every node there should be a combination of circle and a text. */}
                    {nodes.map((n, k) => {
                        return (
                            <Node key={k} nodeColor={nodesColor} node={n.node} textColor={textColor} fontSize={textFontSize} text={n.text} />
                        );
                    })}
                </svg>
            </div>
        );
    }
}

ReactDOM.render(<HomePage />, document.getElementById('app'));