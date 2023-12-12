import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'; 
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// The configureStore() function accepts a single configuration object parameter, which can include the following options:

export const store = configureStore({
  // The reducer option is a function that returns a root reducer, and can be either an object or a function.
  reducer: persistedReducer,
  // The middleware option lets you customize the middleware that's included in the store setup.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);