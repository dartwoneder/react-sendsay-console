import {all, fork} from 'redux-saga/effects';

import login from 'src/store/sagas/auth';
import requests from 'src/store/sagas/requests';

export default function* root() {
  yield all([fork(login), fork(requests)]);
}
