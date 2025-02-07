import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axiosInstance.js';

export const fetchWaterEntriesByDay = createAsyncThunk(
  'water/fetchAllByDay',
  async (date, thunkAPI) => {
    try {
      const { data } = await api.get(`/water/day/${date}`);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterEntrie = createAsyncThunk(
  'water/addEntrie',
  async (entrieData, thunkAPI) => {
    try {
      const { data } = api.post('/water', entrieData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
