// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bulma/css/bulma.css';

import Media from './scenes/Media';
import reducer from './store';

import './styles.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <div>
            <Route exact path="/" component={Media} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
