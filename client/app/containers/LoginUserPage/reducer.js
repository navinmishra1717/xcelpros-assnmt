/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import * as types from './constants';

export const initialState = {
  email: '',
  password: '',
  loading: false,
};

const loginUserPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGIN_USER_REQUEST:
        draft.loading = true;
        break;
      case types.SET_STORE_VALUE:
        draft[action.payload.key] = action.payload.value;
        break;
    }
  });

export default loginUserPageReducer;
