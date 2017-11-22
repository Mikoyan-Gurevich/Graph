import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import Tree from './Components/tree';
import Editor from './Components/editor';
import mockData from '../src/mockData.json';
import configuration from '../src/configuration.json';
import styled from 'styled-components';

OfflinePluginRuntime.install();

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

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
        return (<MainDiv>
            <Editor configuration={configuration} mockData={data} updateRawData={this.updateRawData} />
            <ButtonDiv className='buttons'>
                <button>&lt; </button>
                <button onClick={this.getTreeFromJSON}>&gt; </button>
            </ButtonDiv>
            <Tree configuration={configuration} mockData={data} />
        </MainDiv>);
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));