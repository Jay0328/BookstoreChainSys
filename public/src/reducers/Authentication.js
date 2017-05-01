import Immutable from 'immutable';
import { LOGIN_SUCCESS, LOGOUT } from '../actions';

const initialState = Immutable.fromJS({
  isAuthenticated: false,
  bookstore: null
});

const Authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('bookstore', action.store).set('isAuthenticated', true);
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default Authentication;
