import {
  CLEAR_REGISTER_STATE,
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
    default:
      return state;
  }
};

export default auth;
