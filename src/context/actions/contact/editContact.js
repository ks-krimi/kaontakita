import axios from '../../../helpers/axiosInterceptor';
import {
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_FAIL,
} from '../../../constants/actionTypes';

export default (id, form) => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.country_code || '',
    first_name: form.first_name || '',
    last_name: form.last_name || '',
    phone_number: form.phone_number || '',
    contact_picture: form.contact_picture || null,
    is_favorite: form.is_favorite || false,
  };
  dispatch({type: EDIT_CONTACT_LOADING});
  axios
    .put(`contacts/${id}`, requestPayload)
    .then(res => {
      dispatch({type: EDIT_CONTACT_SUCCESS, payload: res.data});
      onSuccess(res.data);
    })
    .catch(err => {
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: err.response?.data
          ? err.response.data
          : {network: err.message},
      });
    });
};
