import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {requestSendSuccess, requestSendFailure} from 'src/store/actions/requests';

export function* requestSendSaga({payload}) {
  try {
    const response = yield api.sendsay.request(payload);
    yield put(requestSendSuccess(response));
    console.log('response', response);
  } catch (error) {
    console.error(error);
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.REQUEST_SEND, requestSendSaga)]);
}
