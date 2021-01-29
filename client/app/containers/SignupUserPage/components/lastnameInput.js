/**
 * lastnameInput
 * separate react component for lastname input field
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
import { makeSelectLastname } from '../selectors';

const LastnameInput = props => {
  const { lastname, setStoreValue } = props;

  const handleChange = e => {
    setStoreValue({ key: e.target.name, value: e.target.value });
  };

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Last Name"
        type="text"
        name="lastname"
        placeholder="Enter your last name"
        onChange={handleChange}
        value={lastname || ''}
        variant="outlined"
      />
    </Grid>
  );
};

LastnameInput.propTypes = {
  lastname: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lastname: makeSelectLastname(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LastnameInput);
