import {all, put, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess} from 'src/store/actions/auth';

export function* authenticateSaga({payload}) {
  console.log('payload1', payload);
  api.sendsay
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
  console.log('payload, ', api.sendsay);
  yield put(
    authenticateSuccess({
      sessionKey: api.sendsay.session,
    })
  );
}

export function* test2() {
  api.sendsay.request({action: 'sys.settings.get', list: ['about.id']}).then(function (res) {
    console.log(res.list['about.id']);
  });
}

export default function* root() {
  yield all([takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga), takeLatest(ActionTypes.TEST2, test2)]);
}
