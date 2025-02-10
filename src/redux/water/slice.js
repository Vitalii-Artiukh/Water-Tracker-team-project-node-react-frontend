import { createSlice } from "@reduxjs/toolkit";
import {
  addWaterEntrie,
  deleteWaterEntrie,
  fetchTodayWaterRecords,
  fetchWaterMonthStats,
  updateWaterEntrie,
} from "./operations.js";
import { adaptDailyRecordForMonthStats } from "../../utils/adaptDailyRecordForMonthStats.js";
import { adaptEntrieResForDailyRecord } from "../../utils/adaptEntrieResForDailyRecord.js";
import { updateUserWaterRate } from "../auth/operations.js";
import { getDayMonthDate } from "../../utils/dateUtils.js";

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
      entries: [],
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
      .addCase(fetchTodayWaterRecords.pending, (state) => {
        state.loading.dailyLoading = true;
      })
      .addCase(fetchTodayWaterRecords.fulfilled, (state, action) => {
        state.dailyRecords = {
          date: action.payload.date,
          dailyNorm: action.payload.dailyNorm,
          totalWater: action.payload.totalWater,
          dailyNormProgress: action.payload.percentage,
          entries: action.payload.entries,
        };
        state.loading.dailyLoading = false;
      })
      .addCase(fetchTodayWaterRecords.rejected, (state, action) => {
        state.loading.dailyLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchWaterMonthStats.pending, (state) => {
        state.loading.monthLoading = true;
      })
      .addCase(fetchWaterMonthStats.fulfilled, (state, action) => {
        state.monthStats = action.payload;
        state.loading.monthLoading = false;
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
      .addCase(deleteWaterEntrie.rejected, handleEntrieRejected)
      .addCase(updateUserWaterRate.fulfilled, (state, action) => {
        const { todayDate } = action.payload;
        const { dailyNorm } = action.payload.data;
        const totalWater = state.dailyRecords.totalWater;

        const dailyNormProgress =
          dailyNorm > 0
            ? `${Math.round((totalWater / dailyNorm) * 100)}%`
            : "0%";

        state.dailyRecords.dailyNorm = dailyNorm;
        state.dailyRecords.dailyNormProgress = dailyNormProgress;

        const formattedDate = getDayMonthDate(todayDate);

        const isDailyRecordExist = state.monthStats.some(
          (day) => day.date === formattedDate
        );

        if (isDailyRecordExist) {
          state.monthStats = state.monthStats.map((day) => {
            if (day.date === formattedDate) {
              return {
                ...day,
                dailyNorma: dailyNorm,
                percentage: dailyNormProgress,
              };
            }

            return day;
          });
        }
      }),
});

export const { setCurrentServing } = waterSlice.actions;

export default waterSlice.reducer;
