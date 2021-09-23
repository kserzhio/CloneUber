import { configureStore } from '@reduxjs/toolkit';
import NavReducer from './slices/navSlice';

export const store = configureStore({
  reducer: {
    nav: NavReducer,
  },
});
