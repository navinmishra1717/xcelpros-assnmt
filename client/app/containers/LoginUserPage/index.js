/**
 *
 * LoginUserPage
 * using functional component method
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
// import FacebookLogin from 'react-facebook-login';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

// material plugins
import withStyles from '@material-ui/core/styles/withStyles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  Grid,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
} from '@material-ui/icons';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Loading from '../../components/Loading';
import reducer from './reducer';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import {
  makeSelectLoading,
  makeSelectEmail,
  makeSelectPassword,
} from './selectors';

const LoginUserPage = ({
  classes,
  loading,
  errors,
  email,
  password,
  ...restProps
}) => {
  // state management using hooks(useState) in functional component
  const [showPassword, setShowPassword] = useState();

  const handlePasswordToggle = () => {
    setShowPassword(state => !state);
  };

  const handleChange = e => {
    e.persist();
    restProps.setStoreValue({ key: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Helmet>
        <title> Login page </title>
      </Helmet>
      <div className="bgLogin">
        <div
          className="flex-center"
          style={{ maxWidth: '25%', height: '100vh', fontSize: 75 }}
        >
          <p>Hello</p>
        </div>
        <div className="formWrapper flex-center">
          <div className="flex1 text-center">
            <AccountCircle fontSize="large" />
            <Typography
              component="h2"
              variant="h4"
              gutterBottom
              style={{ color: 'blue' }}
            >
              Login
            </Typography>
            <div className="flex-center">
              <p>Don't have an account?</p>
              <Link to="/register">
                <h4 style={{ paddingLeft: 8 }}>Sign up</h4>
              </Link>
            </div>
            <br />
            <form
              className="hasinput400"
              onSubmit={handleSubmit}
              style={{ display: 'inline-block' }}
            >
              <div className={errors ? 'error' : ''}>
                <Grid container spacing={16} alignItems="flex-end">
                  <Grid item>
                    <EmailOutlined />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      onChange={handleChange}
                      value={email || ''}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {!!errors && <span>{errors}</span>}
              </div>
              <br />
              <br />
              <div className={errors ? 'error' : ''}>
                <Grid container spacing={16} alignItems="flex-end">
                  <Grid item>
                    <LockOutlined />
                  </Grid>
                  <Grid item>
                    <TextField
                      style={{ width: 430 }}
                      label="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      onChange={handleChange}
                      value={password || ''}
                      variant="outlined"
                      InputProps={{
                        // this is where toggle button is added
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handlePasswordToggle}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </Grid>
                {!!errors && <span>{errors}</span>}
              </div>
              <br />
              <br />
              <div className="text-right">
                <Button
                  className="btn-block"
                  color="primary"
                  type="submit"
                  variant="contained"
                  disabled={false}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

LoginUserPage.prototype = {
  email: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginUserPage', reducer });
const withSaga = injectSaga({ key: 'loginUserPage', saga });

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  Input: {
    margin: theme.spacing.unit,
  },
});

const withStyle = withStyles(styles);

export default compose(
  withStyle,
  withReducer,
  withSaga,
  withConnect,
)(LoginUserPage);
