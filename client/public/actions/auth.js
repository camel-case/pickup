import { browserHistory } from 'react-router';
import firebase from 'firebase';
import { store } from '../../index.js';

export const USER_AUTH = 'USER_AUTH';
export const INIT_AUTH = 'INIT_AUTH';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

/* **************************
       FIREBASE AUTH
***************************** */

var config = ({
  apiKey: "AIzaSyA7MdNKLUZoEWKE84RJBHTlMoMqVgFpNjE",
  authDomain: "pick-up-94f3b.firebaseapp.com",
  databaseURL: "https://pick-up-94f3b.firebaseio.com/"
});

firebase.initializeApp(config);

function authenticate(provider) {
  // return function(store) {
    firebase.auth().signInWithPopup(provider)
      .then(result => store.dispatch(signInSuccess(result)))
      .catch(error => store.dispatch(signInError(error)));
  // };
}

export function signInWithFacebook() {
  return authenticate(new firebase.auth.FacebookAuthProvider());
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}

export function signInSuccess(result) {
  console.log(result)
  browserHistory.push('/Home');
  return {
    type: SIGN_IN_SUCCESS,
    payload: result.user
  };
}

export function requireAuth(nextState, replace) {
  // if (!firebaseUtils.isLoggedIn()) {
  console.log('inside require auth')
  if (false) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
