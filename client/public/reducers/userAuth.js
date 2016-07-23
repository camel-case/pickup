import { Record } from 'immutable';
import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/auth.js';


// export const AuthState = new Record({
//   authenticated: false,
//   data: null
// });

const UserAuth =  function(state = {}, {payload, type}) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state, authenticated: true, data: payload.user
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state, authenticated: false, data: null
      }

    default:
      return state;
  }
}

export default UserAuth;
