export const selectWaterState = state => state.water;
export const selectWaterServings = state => state.water.items;
export const selectCurrentServing = state => state.water.currentServing;
export const selectIsLoading = state => state.water.loading;
