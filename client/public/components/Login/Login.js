import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.js';

class Login extends Component {

  render() {

    return(
      <div className="container">
        <h1 id="login-title">PickUpz</h1>
        <div className="col-md-offset-3 col-md-6 login-container">
          <h2 id="login-title">Sign in</h2>
          <div className="form-actions">
            <button id="login-btn" onClick={this.props.authenticate} type="button">Facebook</button>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(null, actions)(Login);
