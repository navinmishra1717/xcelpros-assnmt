/**
 * public layout
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// imports
import publicRoutes from '../../routes/publicRoutes';
import { makeSelectLocation } from '../../containers/App/selectors';

const switchRoutes = (
  <Switch>
    {publicRoutes.map(prop => (
      <Route key={prop.path} {...prop} />
    ))}
  </Switch>
);

const publicLayout = ({ location }) => {
  const { pathname } = location;
  return (
    <>
      <main className="flex-1">{switchRoutes}</main>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps)(publicLayout);
