import { createAsyncThunk } from '@reduxjs/toolkit';
import api from "../../api/axiosInstance.js";

export const addWater = createAsyncThunk(
    'water/addWater',
    async (water, thunkAPI) => {
        try {
            const { data } = await api.post('/water', water);

            return data.data;
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
