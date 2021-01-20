/*
 *
 * LoginUserPage actions
 *
 */

import * as types from './constants';

export const setStoreValue = payload => ({
  type: types.SET_STORE_VALUE,
  payload,
});

export const loginUserRequest = payload => ({
  type: types.LOGIN_USER_REQUEST,
  payload,
});
