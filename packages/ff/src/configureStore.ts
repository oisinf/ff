import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import playerInfoReducer from './slices/playerInfoSlice';
import apiResponseReducer from './slices/apiResSlice';

const rootReducer = combineReducers({ container: playerInfoReducer, apiResponse: apiResponseReducer });
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    actionsBlacklist: 'apiResponse/setContainerState'
  }
});

export type AppDispatch = typeof store.dispatch;
