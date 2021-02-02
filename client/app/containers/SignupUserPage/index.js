/**
 * SignupUserPage
 * using class component method to remind legacy
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

// material packages
import { Typography, Grid, Button } from '@material-ui/core';
import {} from '@material-ui/icons';

// other imports
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
// import saga from './saga';
import * as mapDispatchToProps from './actions';
import FirstnameInput from './components/firstnameInput';
import LastnameInput from './components/lastnameInput';
import EmailInput from './components/emailInput';
import PasswordInput from './components/passwordInput';

class SignupUserPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Signup Page</title>
        </Helmet>
        <div className="bgSignup">
          <div
            className="flex-center"
            style={{
              maxWidth: '100%',
              height: '100vh',
              fontSize: 75,
              color: 'blue',
            }}
          >
            <p>Hello</p>
          </div>
          <div className="formWrapper flex-center">
            <div className="flex1 text-center">
              <Typography
                component="h2"
                variant="h4"
                gutterBottom
                style={{ color: 'blue' }}
              >
                Sign-up
              </Typography>
              <div className="flex-center">
                <p>Already have an account?</p>
                <Link to="/login">
                  <h4 style={{ paddingLeft: 8 }}>Login</h4>
                </Link>
              </div>
              <br />
              <form
                className="hasinput400"
                // onSubmit={}
              >
                <div>
                  <Grid container spacing={16}>
                    <FirstnameInput />
                    <LastnameInput />
                    <EmailInput />
                    <PasswordInput />
                  </Grid>
                </div>
                <br />
                <br />
                <div>
                  <Button
                    className="btn-block"
                    color="primary"
                    type="submit"
                    variant="contained"
                  >
                    Register
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

const mapStateToProps = null;

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signupUserPage', reducer });

// const withSaga = injectSaga({ key: 'signupUserPage' });

export default compose(
  withReducer,
  withConnect,
)(SignupUserPage);
