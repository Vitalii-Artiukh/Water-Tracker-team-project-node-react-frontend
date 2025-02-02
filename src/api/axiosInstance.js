import axios from 'axios';
import { store } from '../redux/store.js';

const api = axios.create({
  baseURL: 'https://connections-api.goit.global',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const persistedToken = store.getState().auth.token;

    if (persistedToken) {
      config.headers['Authorization'] = `Bearer ${persistedToken}`;
    } else {
      config.headers['Authorization'] = '';
    }

    return config;
  },
  error => Promise.reject(error)
);

export default api;
