import { createSlice } from '@reduxjs/toolkit';
import {signUp} from "../auth/operations.js";
import {addWater} from "./operations.js";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = state => {
  state.loading = false;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    items: [],
    currentServing: null,
    waterItem:null,
    loading: false,
  },

  reducers: {
    setCurrentServing: (state, action) => {
      state.currentServing = action.payload;
    },
  },

  extraReducers: builder => builder
      .addCase(addWater.fulfilled, (state, action) => {
        const { entries } = action.payload;
        state.water.items = entries;
      }),
});

export const { setCurrentServing } = waterSlice.actions;

export default waterSlice.reducer;
