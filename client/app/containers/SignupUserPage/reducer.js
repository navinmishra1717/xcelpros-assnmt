/**
 * signupUserPage reducer
 * pure function
 */

import { produce } from 'immer';
import * as types from './constants';

export const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const signupUserPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_STORE_VALUE:
        draft[action.payload.key] = action.payload.value;
        break;
    }
  });

export default signupUserPageReducer;
