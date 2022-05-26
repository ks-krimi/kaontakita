import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../helpers/axiosInterceptor';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';

export default ({password, username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    axios
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response?.data
            ? err.response.data
            : {network: err.message},
        });
      });
  };
