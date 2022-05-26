import {
  CLEAR_REGISTER_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case CLEAR_REGISTER_STATE:
      return {...state, data: null, error: null};
    case REGISTER_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};
    case REGISTER_FAIL:
      return {...state, loading: false, error: payload};
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false, isLoggedIn: true, data: payload};
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};
    case LOGOUT:
      return {...state, isLoggedIn: false, data: null};
    default:
      return state;
  }
};

export default auth;
