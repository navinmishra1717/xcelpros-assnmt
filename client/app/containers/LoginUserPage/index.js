/**
 *
 * LoginUserPage
 *
 */

import React from 'react';
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
import { Grid, TextField, Button } from '@material-ui/core';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Loading from '../../components/Loading';
import reducer from './reducer';
import saga from './saga';
import * as mapDispatchToProps from './actions';
import { makeSelectLoading } from './selectors';

class LoginUserPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  state = {};
  handleChange = e => {};
  render() {
    const { classes, loading, errors } = this.props;
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
                onSubmit={this.handleChange}
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
                        onChange={this.handleChange}
                        value=""
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
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={this.handleChange}
                        value={''}
                        variant="outlined"
                      />
                    </Grid>
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
  }
}

const mapStateToProps = createStructuredSelector({
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
