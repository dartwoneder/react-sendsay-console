import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const loginState = {
  loading: true,
  sessionKey: null,
};

export default {
  auth: handleActions(
    {
      [ActionTypes.AUTHENTICATE]: (state, {payload}) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
        };
      },
    },
    loginState
  ),
};
