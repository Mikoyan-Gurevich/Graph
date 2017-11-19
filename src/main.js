import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './main.scss';
import Tree from './Components/tree';
import mockData from '../src/mockData.json';
import configuration from '../src/configuration.json';

OfflinePluginRuntime.install();

ReactDOM.render(<Tree configuration={configuration} mockData={mockData} />, document.getElementById('app'));