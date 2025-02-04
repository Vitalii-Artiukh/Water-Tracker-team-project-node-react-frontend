import axios from 'axios';
import { store } from '../redux/store.js';

const api = axios.create({
  baseURL: 'https://project-group-05-backend.onrender.com',
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
