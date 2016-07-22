import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.js';

class Login extends Component {

  render() {

    return(
      <div>
          <h1 id="login-title">Sign in</h1>
          <button onClick={actions.signInWithFacebook} type="button">Facebook</button>
      </div>
    )
  }

}

export default connect(null, actions)(Login);
