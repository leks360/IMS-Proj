import { configureStore,combineReducers } from "@reduxjs/toolkit";

import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer=combineReducers({users:userReducer,videox:null});
  const persistedReducer=persistReducer(persistConfig,rootReducer);
  
  export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

  export const persistor=persistStore(store);