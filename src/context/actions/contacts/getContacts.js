import axios from '../../../helpers/axiosInterceptor';
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';

export default () => dispatch => {
  dispatch({type: GET_CONTACTS_LOADING});
  axios
    .get('contacts')
    .then(res => {
      console.log('res.data', res.data);
      dispatch({type: GET_CONTACTS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response?.data
          ? err.response.data
          : {network: err.message},
      });
    });
};
