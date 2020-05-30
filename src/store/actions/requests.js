import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {requestSend, requestSendSuccess, requestSendFailure} = createActions({
  [ActionTypes.REQUEST_SEND]: (payload) => payload,
  [ActionTypes.REQUEST_SEND_SUCCESS]: (payload) => payload,
  [ActionTypes.REQUEST_SEND_FAILURE]: (payload) => payload,
});
