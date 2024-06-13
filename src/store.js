import {configureStore} from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import {setupListeners} from '@reduxjs/toolkit/query';
// import {pokemonApi} from './services/pokemon';
// import {pokemonApi} from './services/pokemon';
import {authApi} from './services/authentication';
import {pokemonApi} from './services/pokemon';
import authReduer from './services/feature/authSlice';
import authSlice from './services/feature/authSlice';

import userDataReducer, {
  sliceKey as userDataKey,
} from './services/feature/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReduer,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userDataKey]: userDataReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(authApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
export const RootState = store.getState;
export const AppDispatch = store.dispatch;

setupListeners(store.dispatch);
