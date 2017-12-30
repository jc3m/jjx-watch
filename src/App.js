// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

import Admin from './scenes/Admin';
import Media from './scenes/Media';
import Show from './scenes/Show';
import reducer from './store';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => {
  const main = (
    <HashRouter>
      <div>
        <Route exact path="/" component={Media} />
        <Route exact path="/adm" component={Admin} />
        <Route path="/s/:show" component={Show} />
      </div>
    </HashRouter>
  );
  return (
    <Provider store={store} >
      <div>
        { main }
      </div>
    </Provider>
  );
};

export default App;
