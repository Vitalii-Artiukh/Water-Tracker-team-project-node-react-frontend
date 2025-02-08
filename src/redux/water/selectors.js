export const selectWaterState = state => state.water;
export const selectMonthStats = state => state.water.monthStats;
export const selectDailyRecords = state => state.water.dailyRecords;
export const selectCurrentServing = state => state.water.currentServing;
export const selectLoading = state => state.water.loading;
export const selectError = state => state.water.error;
