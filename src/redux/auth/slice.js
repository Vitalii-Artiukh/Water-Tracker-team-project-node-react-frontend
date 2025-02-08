import { createSlice } from '@reduxjs/toolkit';
import {
  logout,
  refreshUser,
  signIn,
  signUp,
  updateUserAvatar,
  updateUserData,
  updateUserWaterRate,
} from './operations.js';

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

  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        const { _id, avatar, ...userData } = action.payload;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { _id, avatar, ...userData } = action.payload;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = Object.keys(state.user).reduce((acc, key) => {
          acc[key] = null;
          return acc;
        }, {});
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        const { _id, avatar, ...userData } = action.payload;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.user.avatarUrl = action.payload.avatar;
      })
      .addCase(updateUserWaterRate.fulfilled, (state, action) => {
        state.user.dailyNorm = action.payload.dailyNorm;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        const { _id, avatar, ...userData } = action.payload;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const { setCurrentTheme } = authSlice.actions;

export default authSlice.reducer;
