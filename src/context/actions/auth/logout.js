import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT} from '../../../constants/actionTypes';

export default () => dispatch => {
  dispatch({type: LOGOUT});
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
};
