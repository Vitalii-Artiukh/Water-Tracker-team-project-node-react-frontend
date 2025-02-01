import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/ApiInstance.js';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userCredits, thunkAPI) => {
    try {
      const response = await api.post('/users/signup', userCredits);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
