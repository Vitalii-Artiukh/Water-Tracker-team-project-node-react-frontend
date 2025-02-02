import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";

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
    isLoggedIn: false,
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
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.isLoggedIn = true
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export default authSlice.reducer;
