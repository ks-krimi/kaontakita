import axios from '../../../helpers/axiosInterceptor';
import {
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_FAIL,
} from '../../../constants/actionTypes';

export default form => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.country_code || '',
    first_name: form.first_name || '',
    last_name: form.last_name || '',
    phone_number: form.phone_number || '',
    // phone_number: `${form.phone_code}${form.phone_number}` || '',
    contact_picture: form.contact_picture || null,
    is_fovorite: form.isFavorite || false,
  };
  dispatch({type: CREATE_CONTACT_LOADING});
  axios
    .post('contacts/', requestPayload)
    .then(res => {
      dispatch({type: CREATE_CONTACT_SUCCESS, payload: res.data});
      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: CREATE_CONTACT_FAIL,
        payload: err.response?.data
          ? err.response.data
          : {network: err.message},
      });
    });
};
