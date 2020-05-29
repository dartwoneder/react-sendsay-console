import {all, fork} from 'redux-saga/effects';

import login from 'src/store/sagas/auth';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(login)]);
}
