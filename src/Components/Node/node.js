import React from 'react';
import ReactDOM from 'react-dom';


class Node extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <circle cx="500" cy="50" r="25" fill="rgb(70, 70, 70)" />
        );
    }
}

export default Node;