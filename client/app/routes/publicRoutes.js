import React from 'react';
import LoginUserPage from '../containers/LoginUserPage';
import SignupUserPage from '../containers/SignupUserPage';

const publicRoutes = [
  {
    exact: true,
    // Redirect
    path: '/',
    component: LoginUserPage,
  },
  {
    exact: true,
    path: '/login',
    component: LoginUserPage,
  },
  {
    exact: true,
    path: '/register',
    component: SignupUserPage,
  },
];

export default publicRoutes;
