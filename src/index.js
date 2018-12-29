import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/index.scss';
import Root from './javascripts/pages/Root';
import Home from './javascripts/pages/Home';
import Nback from './javascripts/pages/Nback';
import Privacy from './javascripts/pages/Privacy';

const initialState = { message: 'hello redux.' };
const store = createStore(
  (state = initialState) => ({ ...state }),
  initialState
);

const App = props => {
  return (
    <Router>
      <Root>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nback" component={Nback} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Root>
    </Router>
  );
};

const ReduxApp = connect(state => ({ message: state.message }))(App);
render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('app')
);
