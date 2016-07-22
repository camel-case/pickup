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


export function authenticate() {
  return dispatch => {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(result => {
        browserHistory.push('/Home');
        dispatch(signInSuccess(result))
      })
  };
}

export function signInSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  };
}

export function requireAuth(nextState, replace) {
  if (authState()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export function authState() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (store.getState().userAuth.data) {
      return true;
    } else {
      browserHistory.push('/');
      return false;
    }
  });
}
