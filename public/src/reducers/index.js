import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import Authentication from './Authentication';
import inventory from './inventory';
import loginForm from './loginForm';
import mockingForm from './mockingForm';
import sidebar from './sidebar';
import transaction from './transaction';

const reducers = combineReducers({
  Authentication,
  inventory,
  loginForm,
  mockingForm,
  sidebar,
  transaction,
  router: routerReducer
});

export default reducers;
