import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import waterReducer from './water/slice';
import authReduser from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'currentTheme'],
};

export const store = configureStore({
  reducer: {
    water: waterReducer,
    auth: persistReducer(authPersistConfig, authReduser),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
