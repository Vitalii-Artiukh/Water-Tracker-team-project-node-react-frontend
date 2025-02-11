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

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

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
    isLoading: false,
  },

  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, action) => {
        const { _id, avatar, ...userData } = action.payload.user;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, handleRejected)
      .addCase(signIn.pending, handlePending)
      .addCase(signIn.fulfilled, (state, action) => {
        const { _id, avatar, ...userData } = action.payload.user;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = Object.keys(state.user).reduce((acc, key) => {
          acc[key] = null;
          return acc;
        }, {});
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(updateUserData.pending, handlePending)
      .addCase(updateUserData.fulfilled, (state, action) => {
        const { _id, avatar, ...userData } = action.payload;
        state.user = {
          ...userData,
          avatarUrl: avatar,
        };
        state.isLoading = false;
      })
      .addCase(updateUserData.rejected, handleRejected)
      .addCase(updateUserAvatar.pending, handlePending)
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.user.avatarUrl = action.payload.avatar;
        state.isLoading = false;
      })
      .addCase(updateUserAvatar.rejected, handleRejected)
      .addCase(updateUserWaterRate.pending, handlePending)
      .addCase(updateUserWaterRate.fulfilled, (state, action) => {
        state.user.dailyNorm = action.payload.data.dailyNorm;
        state.isLoading = false;
      })
      .addCase(updateUserWaterRate.rejected, handleRejected)
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
