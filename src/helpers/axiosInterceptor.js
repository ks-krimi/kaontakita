import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../config/env';

const headers = {};

const axiosInstance = axios.create({
  baseURL: env.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default axiosInstance;
