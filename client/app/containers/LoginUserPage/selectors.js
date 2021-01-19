import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.forecast || initialState;
/**
 * Other specific selectors
 */
export const makeSelectLoading = () =>
  createSelector(
    selectLoginPageDomain,
    state => state.loading,
  );

/**
 * Default selector used by LoginPage
 */
