import {all, put, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess} from 'src/store/actions/auth';

export function* authenticateSaga({payload}) {
  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`;
    })
    .catch((err) => {
      document.cookie = '';
      console.log('err', err);
    });

  yield put(
    authenticateSuccess({
      sessionKey: api.sendsay.session,
      login: payload.login,
      sublogin: payload.sublogin,
    })
  );
}

export function* logoutSaga({payload}) {
  document.cookie = '';
}

export default function* root() {
  yield all([takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga), takeLatest(ActionTypes.LOGOUT, logoutSaga)]);
}
