import { createSelector } from '@reduxjs/toolkit';

export const selectWaterState = state => state.water;
export const selectMonthStats = state => state.water.monthStats;
export const selectDailyRecords = state => state.water.dailyRecords;
export const selectCurrentServing = state => state.water.currentServing;
export const selectLoading = state => state.water.loading;
export const selectError = state => state.water.error;

export const selectSortedMonthStats = createSelector(
  [selectMonthStats],
  monthStats => {
    return monthStats.map(day => {
      day = {
        ...day,
        entries: [...day.entries].sort(
          (a, b) => new Date(a.time) - new Date(b.time)
        ),
      };

      return day;
    });
  }
);

export const selectSortedDailyRecords = createSelector(
  [selectDailyRecords],
  dailyRecord =>
    (dailyRecord = {
      ...dailyRecord,
      entries: [...dailyRecord.entries].sort(
        (a, b) => new Date(a.time) - new Date(b.time)
      ),
    })
);
