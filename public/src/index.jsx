//  react
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//  css
import 'normalize.css/normalize.css';
import '../assets/css/index.scss';
//  components & containers
import {
  AppContainer,
  AuthRouteContainer,
  InventoryContainer,
  LoginContainer,
  MockingContainer,
  PrivateRouteContainer,
  TransactionContainer
} from './containers';
//  redux
import store from './store';
//  actions
import { verifyAuth } from './actions';

store.dispatch(verifyAuth());

render(
  <Provider store={store}>
    <Router>
      <AppContainer>
        <PrivateRouteContainer exact path='/' component={TransactionContainer} />
        <PrivateRouteContainer exact path='/inventory' component={InventoryContainer} />
        <PrivateRouteContainer exact path='/mocking' component={MockingContainer} />
        <AuthRouteContainer path='/login' component={LoginContainer} />
      </AppContainer>
    </Router>
  </Provider>,
  document.getElementById('app')
);
