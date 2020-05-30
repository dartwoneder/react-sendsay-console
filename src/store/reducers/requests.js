import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const initialState = {
  loading: false,
  history: [],
  currentResponse: null,
};

export default {
  requests: handleActions(
    {
      [ActionTypes.REQUEST_SEND]: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.REQUEST_SEND_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          history: [payload, ...state.history],
        };
      },
    },
    initialState
  ),
};
