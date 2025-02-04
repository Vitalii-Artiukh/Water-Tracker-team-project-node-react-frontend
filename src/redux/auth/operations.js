import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axiosInstance.js';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userCredits, thunkAPI) => {
    try {
      await api.post('/auth/signup', userCredits);

      const { data } = await api.post('/auth/login', userCredits);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (userCredits, thunkAPI) => {
    try {
      const { data } = await api.post('/auth/login', userCredits);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async (userData, thunkAPI) => {
    try {
      const { data } = await api.patch('/auth', userData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = api.post('auth/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Failed to refresh user');
    }

    try {
      const { data } = await api.get('/user/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
