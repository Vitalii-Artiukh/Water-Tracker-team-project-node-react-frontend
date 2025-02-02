import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global/";
export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

// Add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    console.log(formData);

    try {
      const { data } = await authInstance.post("/users/login", formData);
      // data -> email: "1111@gmai.com";name: "asdasdasd"   password: "222222222";
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
