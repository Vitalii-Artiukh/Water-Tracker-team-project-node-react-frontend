import { createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../api/axiosInstance.js";

export const addWater = createAsyncThunk(
    'water/addWater',
    async (water, thunkAPI) => {
        try {
            const { data } = await api.post('/water', water);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateWater = createAsyncThunk(
    'water/update',
    async (water, thunkAPI) => {
        const {entryId,...field} = water
        try {
            const { data } = await api.patch(`/water/${entryId}`, field);

            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchWaterEntriesByDay = createAsyncThunk(
  'water/fetchAllByDay',
  async (date, thunkAPI) => {
    try {
      const { data } = await api.get(`/water/day/${date}`);
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
