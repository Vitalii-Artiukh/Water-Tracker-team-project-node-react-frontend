import { createSlice } from '@reduxjs/toolkit';

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

  extraReducers: builder => builder,
});

export default authSlice.reducer;
