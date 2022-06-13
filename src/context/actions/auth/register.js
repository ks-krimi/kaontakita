import {
  CLEAR_REGISTER_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => dispatch => {
  dispatch({type: CLEAR_REGISTER_STATE});
};

export default ({
    email,
    password,
    username,
    firstname: first_name,
    lastname: last_name,
  }) =>
  dispatch => {
    dispatch({type: REGISTER_LOADING});
    axios
      .post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response?.data
            ? err.response.data
            : {network: err.message},
        });
      });
  };
