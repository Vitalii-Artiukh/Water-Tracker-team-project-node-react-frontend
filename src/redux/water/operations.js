import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDailyNorma = createAsyncThunk(
    'auth/fetchDailyNorma',
    async (_, thunkApi) => {
        try {
            const {data} = await axios.get('/');
            return data.dailyNorm;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const updateDailyNorma = createAsyncThunk(
    'auth/updateDailyNorma',
    async (newDailyNorm, thunkApi) => {
        try {
            const {data} = await axios.patch('/', { dailyNorm: newDailyNorm });
            return data.dailyNorm;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
