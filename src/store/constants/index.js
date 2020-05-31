import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
  AUTHENTICATE: undefined,
  AUTHENTICATE_CHECK: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,
  LOGOUT: undefined,
  LOGOUT_SUCCESS: undefined,
  LOGOUT_FAILURE: undefined,
  REQUEST_SEND: undefined,
  REQUEST_SEND_SUCCESS: undefined,
  REQUEST_SEND_FAILURE: undefined,
  REQUEST_REMOVE_ONE: undefined,
  REQUEST_REMOVE_ALL: undefined,
});
