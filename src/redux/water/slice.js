import { createSlice } from '@reduxjs/toolkit';
import { addWaterEntrie, fetchWaterEntriesByDay } from './operations.js';
import { getDayMonthDate } from '../../utils/dateUtils.js';

// const handlePending = state => {
//   state.loading = true;
// };

// const handleRejected = state => {
//   state.loading = false;
// };

const waterSlice = createSlice({
  name: 'water',
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
    },
    error: null,
  },

  reducers: {
    setCurrentServing: (state, action) => {
      state.currentServing = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchWaterEntriesByDay.fulfilled, (state, action) => {
        state.dailyRecords = {
          date: action.payload.date,
          dailyNorm: action.payload.dailyNorm,
          totalWater: action.payload.totalWater,
          dailyNormProgress: action.payload.percentage,
          entires: action.payload.entires,
        };
      })
      .addCase(addWaterEntrie.fulfilled, (state, action) => {
        if (state.dailyRecords.date === action.payload.date) {
          state.dailyRecords = {
            dailyNorm: action.payload.dailyNorm,
            totalWater: action.payload.totalWater,
            dailyNormProgress: action.payload.percentage,
            entires: action.payload.entires,
          };
        }

        const formattedDate = getDayMonthDate(action.payload.date);

        const dayToUpdate = {
          date: formattedDate,
          dailyNorma: action.payload.dailyNorm,
          percentage: `${
            (action.payload.totalWater / action.payload.dailyNorm) * 100
          }%`,
          entryCount: action.payload.entires.length,
          entries: action.payload.entires,
        };

        const isRecordExist = state.monthStats.some(
          day => day.date === formattedDate
        );

        if (isRecordExist) {
          state.monthStats = state.monthStats.map(day =>
            day.date === formattedDate ? dayToUpdate : day
          );
        } else {
          state.monthStats.push(dayToUpdate);
        }
      }),
});

export const { setCurrentServing } = waterSlice.actions;

export default waterSlice.reducer;
