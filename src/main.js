import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './main.scss';
import Tree from './Components/tree';
import Editor from './Components/editor';
import mockData from '../src/mockData.json';
import configuration from '../src/configuration.json';

OfflinePluginRuntime.install();

class Homepage extends React.Component {
    constructor() {
        super();
        this.getTreeFromJSON = this.getTreeFromJSON.bind(this);
        this.updateRawData = this.updateRawData.bind(this);
        this.state = {
            configuration: configuration,
            data: mockData,
            rawTextData: {}
        };
    }

    updateRawData(rawTextData) {
        this.setState({ rawTextData });
    }

    getTreeFromJSON() {
        let rawTextData = this.state.rawTextData;
        this.setState({ data: rawTextData });
    }

    render() {
        let { data, configuration } = this.state;
        return (<div className='main'>
            <Editor configuration={configuration} mockData={data} updateRawData={this.updateRawData} />
            <div className='buttons'>
                <button>&lt; </button>
                <button onClick={this.getTreeFromJSON}>&gt; </button>
            </div>
            <Tree configuration={configuration} mockData={data} />
        </div>);
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));