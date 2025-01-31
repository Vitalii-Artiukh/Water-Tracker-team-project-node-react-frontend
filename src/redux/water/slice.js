import { createSlice } from '@reduxjs/toolkit';

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
    currentServing: 0,
    loading: false,
  },

  reducers: {
    setCurrentServing: (state, action) => {
      state.currentServing = action.payload;
    },
  },

  extraReducers: builder => builder,
});

export const { setCurrentServing } = waterSlice.actions;

export default waterSlice.reducer;
