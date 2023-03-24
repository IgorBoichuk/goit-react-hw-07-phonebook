import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './createSlice';

export const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
