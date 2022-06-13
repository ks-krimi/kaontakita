import axios from '../../../helpers/axiosInterceptor';
import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';

export default id => dispatch => onSuccess => {
  dispatch({type: DELETE_CONTACT_LOADING});
  axios
    .delete(`contacts/${id}`)
    .then(res => {
      dispatch({type: DELETE_CONTACT_SUCCESS, payload: id});
      onSuccess();
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: err.response?.data
          ? err.response.data
          : {network: err.message},
      });
    });
};
