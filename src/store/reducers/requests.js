import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

const MAX_HISTORY_LENGTH = 15;
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
        let history = [payload];

        if (state.history.length) {
          let requestAddedToHistory = false;
          history = state.history.reduce((acc, item, index, arr) => {
            if (item.request.action === payload.request.action) {
              requestAddedToHistory = true;
              return [payload, ...acc];
            }
            if (index === arr.length - 1 && !requestAddedToHistory) {
              return [payload, ...acc, item];
            }

            return [...acc, item];
          }, []);
        }
        if (history.length > MAX_HISTORY_LENGTH) {
          history = history.slice(0, MAX_HISTORY_LENGTH);
        }
        return {
          ...state,
          loading: false,
          history,
        };
      },
      [ActionTypes.REQUEST_REMOVE_ONE]: (state, {payload}) => {
        return {
          ...state,
          history: state.history.filter((item) => item.id !== payload),
        };
      },
      [ActionTypes.REQUEST_REMOVE_ALL]: (state) => {
        return {
          ...state,
          history: [],
        };
      },
    },
    initialState
  ),
};
