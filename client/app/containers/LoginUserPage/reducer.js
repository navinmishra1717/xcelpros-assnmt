/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import * as types from './constants';

export const initialState = {
  loading: false,
};

const loginUserPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGIN_USER_REQUEST:
        draft.loading = true;
        break;
    }
  });

export default loginUserPageReducer;
