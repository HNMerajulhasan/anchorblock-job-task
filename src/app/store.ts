// app/store.ts

// import { configureStore } from '@reduxjs/toolkit';
// import { api } from '../services/api';
// import authReducer from '../features/authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import authReducer from '../features/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'authToken', 'user'], // List the keys you want to persist
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
