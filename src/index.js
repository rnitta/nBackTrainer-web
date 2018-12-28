import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Root from './pages/Root'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

const initialState = { message: 'hello redux.' };
const store = createStore(
  (state = initialState) => ({ ...state }),
  initialState
);

const App = (props)=> {
  return (
    <Router>
      <Root>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Root>
    </Router>
  )
};

const ReduxApp = connect(state => ({ message: state.message }))(App);
render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('app')
);
