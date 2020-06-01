import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  error: null,
};

export default {
  auth: handleActions(
    {
      [ActionTypes.AUTHENTICATE]: (state) => {
        return {
          ...state,
          loading: true,
          error: null,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state, {payload}) => {
        console.log('payloadpayloadpayload', payload);
        return {
          ...state,
          loading: false,
          login: null,
          sessionKey: null,
          sublogin: null,
          error: payload,
        };
      },
      [ActionTypes.LOGOUT]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
    },
    initialState
  ),
};
