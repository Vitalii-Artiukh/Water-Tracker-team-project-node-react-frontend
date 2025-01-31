import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyNorma, updateDailyNorma } from '../water/operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      gender: null,
      dailyNorm: null,
      avatarUrl: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    currentTheme: 'light',
  },

  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },

  extraReducers: builder => builder
  // .addCase(fetchDailyNorma.pending, )
  .addCase(fetchDailyNorma.fulfilled, (state, action) => {
    state.user.dailyNorm = action.payload;
  })
  .addCase(updateDailyNorma.fulfilled, (state, action) => {
    state.user.dailyNorm = action.payload;
  })
});

export default authSlice.reducer;
