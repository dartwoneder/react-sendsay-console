import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {authenticate, authenticateSuccess, authenticateFailure, logout} = createActions({
  [ActionTypes.AUTHENTICATE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_SUCCESS]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload) => payload,
  [ActionTypes.LOGOUT]: (payload) => payload,
});
