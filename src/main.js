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

const Title = styled.h1`
    text-align: center;
    padding: 20px;
    margin: 0;
    background-image: linear-gradient(to bottom,#FFFFFF,#e2e2e2);
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
        this.setState({ data: JSON.parse(rawTextData) });
    }

    render() {
        let { data, configuration } = this.state;
        return (
            <div>
                <Title>JSON to Tree converter</Title>
                <MainDiv>
                    <Editor configuration={configuration} mockData={data} updateRawData={this.updateRawData} />
                    <ButtonDiv>
                        <button onClick={this.getTreeFromJSON}>Convert </button>
                    </ButtonDiv>
                    <Tree configuration={configuration} mockData={data} />
                </MainDiv>
            </div>);
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));