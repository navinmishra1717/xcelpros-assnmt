/**
 * signupUserPage actions
 * all the actions required for signup page
 */

import * as types from './constants';

export const setStoreValue = payload => ({
  type: types.SET_STORE_VALUE,
  payload,
});
