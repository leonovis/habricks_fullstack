import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'; 

// The configureStore() function accepts a single configuration object parameter, which can include the following options:

export const store = configureStore({
    // The reducer option is a function that returns a root reducer, and can be either an object or a function.
  reducer: {user: userReducer},
  // The middleware option lets you customize the middleware that's included in the store setup.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});