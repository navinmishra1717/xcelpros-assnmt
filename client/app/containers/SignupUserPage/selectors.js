/**
 * All selectors for signupUserPage
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signupUserPage state domain
 */
export const selectSignupUserPageDomain = state =>
  state.signupUserPage || initialState;

/**
 * other specific selectors
 */
export const makeSelectFirstname = () =>
  createSelector(
    selectSignupUserPageDomain,
    state => state.firstname,
  );
export const makeSelectLastname = () =>
  createSelector(
    selectSignupUserPageDomain,
    state => state.lastname,
  );

export const makeSelectEmail = () =>
  createSelector(
    selectSignupUserPageDomain,
    state => state.email,
  );

export const makeSelectPassword = () =>
  createSelector(
    selectSignupUserPageDomain,
    state => state.password,
  );

/**
 * Default selector used by signupUserPage
 */

const makeSelectSignupUserPage = () =>
  createSelector(
    selectSignupUserPageDomain,
    substate => substate,
  );

export default makeSelectSignupUserPage;
