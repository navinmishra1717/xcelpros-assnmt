/**
 * emailInput
 * separate react component for email input field
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
import { makeSelectEmail } from '../selectors';

const EmailInput = props => {
  const { email, setStoreValue } = props;

  const handleChange = e => {
    setStoreValue({ key: e.target.name, value: e.target.value });
  };

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Email ID"
        type="text"
        name="email"
        placeholder="Enter your email here"
        onChange={handleChange}
        value={email || ''}
        variant="outlined"
      />
    </Grid>
  );
};

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailInput);
