import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess, authenticateFailure, logoutSuccess} from 'src/store/actions/auth';

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({payload}) {
  try {
    yield api.sendsay.login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    });
    document.cookie = `sendsay_session=${api.sendsay.session}`;
    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        sublogin: payload.sublogin,
      })
    );
  } catch (err) {
    console.log('err', err);
    document.cookie = '';
    yield put(
      authenticateFailure({
        id: err.id,
        explain: err.explain,
      })
    );
  }
}

export function* logoutSaga() {
  document.cookie = '';
  yield put(logoutSuccess());
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
