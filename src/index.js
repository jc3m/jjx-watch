// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// $FlowFixMe: Root should exist in the html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
