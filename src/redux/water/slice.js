import { createSlice } from "@reduxjs/toolkit";
import {
  addWaterEntrie,
  deleteWaterEntrie,
  fetchWaterEntriesByDay,
  fetchWaterMonthStats,
  updateWaterEntrie,
} from "./operations.js";
import { adaptDailyRecordForMonthStats } from "../../utils/adaptDailyRecordForMonthStats.js";
import { adaptEntrieResForDailyRecord } from "../../utils/adaptEntrieResForDailyRecord.js";

const handleEntriePending = (state) => {
  state.loading.entrieLoading = true;
};

const handleEntrieRejected = (state, action) => {
  state.loading.entrieLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: "water",
  initialState: {
    monthStats: [],
    dailyRecords: {
      date: null,
      dailyNorm: 2000,
      totalWater: null,
      dailyNormProgress: null,
      entires: [],
    },
    currentServing: null,
    loading: {
      monthLoading: false,
      dailyLoading: false,
      entrieLoading: false,
    },
    error: null,
  },

  reducers: {
    setCurrentServing: (state, action) => {
      state.currentServing = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchWaterEntriesByDay.pending, (state) => {
        state.loading.dailyLoading = true;
      })
      .addCase(fetchWaterEntriesByDay.fulfilled, (state, action) => {
        state.dailyRecords = {
          date: action.payload.date,
          dailyNorm: action.payload.dailyNorm,
          totalWater: action.payload.totalWater,
          dailyNormProgress: action.payload.percentage,
          entires: action.payload.entires,
        };
      })
      .addCase(fetchWaterEntriesByDay.rejected, (state, action) => {
        state.loading.dailyLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchWaterMonthStats.pending, (state) => {
        state.loading.monthLoading = true;
      })
      .addCase(fetchWaterMonthStats.fulfilled, (state, action) => {
        state.monthStats = action.payload;
      })
      .addCase(fetchWaterMonthStats.rejected, (state, action) => {
        state.loading.monthLoading = false;
        state.error = action.payload;
      })
      .addCase(addWaterEntrie.pending, handleEntriePending)
      .addCase(addWaterEntrie.fulfilled, (state, action) => {
        if (state.dailyRecords.date === action.payload.date) {
          state.dailyRecords = adaptEntrieResForDailyRecord(action.payload);
        }

        const dayToUpdate = adaptDailyRecordForMonthStats(action.payload);

        const isDailyRecordExist = state.monthStats.some(
          (day) => day.date === dayToUpdate.date
        );

        if (isDailyRecordExist) {
          state.monthStats = state.monthStats.map((day) =>
            day.date === dayToUpdate.date ? dayToUpdate : day
          );
        } else {
          state.monthStats.push(dayToUpdate);
        }
      })
      .addCase(addWaterEntrie.rejected, handleEntrieRejected)
      .addCase(updateWaterEntrie.pending, handleEntriePending)
      .addCase(updateWaterEntrie.fulfilled, (state, action) => {
        if (state.dailyRecords.date === action.payload.date) {
          state.dailyRecords = adaptEntrieResForDailyRecord(action.payload);
        }

        const dayToUpdate = adaptDailyRecordForMonthStats(action.payload);

        state.monthStats = state.monthStats.map((day) =>
          day.date === dayToUpdate.date ? dayToUpdate : day
        );
      })
      .addCase(updateWaterEntrie.rejected, handleEntrieRejected)
      .addCase(deleteWaterEntrie.pending, handleEntriePending)
      .addCase(deleteWaterEntrie.fulfilled, (state, action) => {
        if (state.dailyRecords.date === action.payload.date) {
          state.dailyRecords = adaptEntrieResForDailyRecord(action.payload);
        }

        const dayToUpdate = adaptDailyRecordForMonthStats(
          action.payload.updatedWaterRecord
        );

        state.monthStats = state.monthStats.map((day) =>
          day.date === dayToUpdate.date ? dayToUpdate : day
        );
      })
      .addCase(deleteWaterEntrie.rejected, handleEntrieRejected),
});

export const { setCurrentServing } = waterSlice.actions;

export default waterSlice.reducer;
