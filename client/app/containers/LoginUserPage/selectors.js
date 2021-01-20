import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginUserPage state domain
 */

const selectLoginPageDomain = state => state.loginUserPage || initialState;
/**
 * Other specific selectors
 */

export const makeSelectEmail = () =>
  createSelector(
    selectLoginPageDomain,
    state => state.email,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectLoginPageDomain,
    state => state.password,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectLoginPageDomain,
    state => state.loading,
  );

/**
 * Default selector used by LoginUserPage
 */

const makeSelectLoginUserPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

export default makeSelectLoginUserPage;
