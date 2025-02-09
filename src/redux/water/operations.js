import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axiosInstance.js';
import { getTodayDate } from '../../utils/dateUtils.js';

export const fetchTodayWaterRecords = createAsyncThunk(
  'water/fetchAllForToday',
  async (_, thunkAPI) => {
    const todayDate = getTodayDate();
    try {
      const { data } = await api.get(`/water/day/${todayDate}`);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchWaterMonthStats = createAsyncThunk(
  'water/fetchMonthStats',
  async (yearMonth, thunkAPI) => {
    try {
      const { data } = await api.get(`/water/month/${yearMonth}`);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addWaterEntrie = createAsyncThunk(
  'water/addEntrie',
  async (entrieData, thunkAPI) => {
    try {
      const { data } = await api.post('/water', entrieData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateWaterEntrie = createAsyncThunk(
  'water/updateEntrie',
  async ({ entrieId, entrieData }, thunkAPI) => {
    try {
      const { data } = await api.patch(`/water/${entrieId}`, entrieData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWaterEntrie = createAsyncThunk(
  'water/deleteEntrie',
  async (entrieId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/water/${entrieId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
