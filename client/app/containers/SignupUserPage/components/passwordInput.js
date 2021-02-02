/**
 * passwordInput
 * separate react component for password input field
 * functional component
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// material packages
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

// other imports
import * as mapDispatchToProps from '../actions';
import { makeSelectPassword } from '../selectors';

const PasswordInput = props => {
  const { password, setStoreValue } = props;

  // state management using hooks(useState) in functional component
  const [showPassword, setShowPassword] = useState();

  const handleChange = e => {
    setStoreValue({ key: e.target.name, value: e.target.value });
  };

  // const handlePasswordToggle = () => setShowPassword(!showPassword);
  const handlePasswordToggle = () => {
    setShowPassword(state => !state);
  };

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder="Enter your password here"
        onChange={handleChange}
        value={password || ''}
        variant="outlined"
        InputProps={{
          // put toggle icon here
          endAdornment: (
            <InputAdornment position="end" style={{ marginLeft: 36 }}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  password: makeSelectPassword(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordInput);
