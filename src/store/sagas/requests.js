import {all, put, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {requestSendSuccess, requestSendFailure} from 'src/store/actions/requests';

export function* requestSendSaga({payload}) {
  const id = new Date().getTime();
  try {
    const response = yield api.sendsay.request(payload);
    yield put(requestSendSuccess({id, response, name: payload.action, request: payload, error: false}));
  } catch (error) {
    yield put(requestSendSuccess({id, response: error, name: payload.action, request: payload, error: true}));
    console.error(error);
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.REQUEST_SEND, requestSendSaga)]);
}
