import { createSlice } from "@reduxjs/toolkit";
import {
  logout,
  refreshUser,
  signIn,
  signUp,
  updateUserAvatar,
  updateUserData,
} from "./operations.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      gender: null,
      dailyNorm: null,
      avatarUrl: null,
    },
    token: null,
    isLoggedIn: true,
    isRefreshing: false,
    currentTheme: "light",
  },

  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.user = {
          ...action.payload.user,
          gender: "woman",
          dailyNorm: 1500,
          avatarUrl: null,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.user = {
          ...action.payload.user,
          gender: "woman",
          dailyNorm: 1500,
          avatarUrl: null,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = Object.keys(state.user).reduce((acc, key) => {
          acc[key] = null;
          return acc;
        }, {});
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        // IF USER
        // state.user = action.payload
        // IF AVATAR URL
        state.user.avatarUrl = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        // state.user = action.payload.user;
        state.user = {
          ...action.payload.user,
          gender: "woman",
          dailyNorm: 1500,
          avatarUrl: null,
        };
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const { setCurrentTheme } = authSlice.actions;

export default authSlice.reducer;
