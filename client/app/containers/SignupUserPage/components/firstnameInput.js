/**
 * firstnameInput
 * separate react component for firstname input field
 * functional component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// material packages
import { TextField, Grid } from '@material-ui/core';

// other imports
import * as mapDispatchToProps from '../actions';
import { makeSelectFirstname } from '../selectors';

const FirstnameInput = props => {
  const { firstname, setStoreValue } = props;

  const handleChange = e => {
    setStoreValue({ key: e.target.name, value: e.target.value });
  };

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="First Name"
        type="text"
        name="firstname"
        placeholder="Enter your first name"
        onChange={handleChange}
        value={firstname || ''}
        variant="outlined"
      />
    </Grid>
  );
};

FirstnameInput.propTypes = {
  firstname: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  firstname: makeSelectFirstname(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstnameInput);
