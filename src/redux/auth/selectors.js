export const selectAuthState = state => state.auth;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectCurrentTheme = state => state.auth.currentTheme;
export const selectUserDailyNorm = state => state.auth.user.dailyNorm;
