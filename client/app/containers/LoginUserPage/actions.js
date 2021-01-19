/*
 *
 * LoginUserPage actions
 *
 */

import * as types from './constants';

// export const setStoreValue = payload => ({
//   type: types.SET_STORE_VALUE,
//   payload,
// });
// export const setValue = payload => ({
//   type: types.SET_VALUE,
//   payload,
// });

// export const clearStore = payload => ({ type: types.CLEAR_STORE, payload });

export const loginUserRequest = payload => ({
  type: types.LOGIN_USER_REQUEST,
  payload,
});
