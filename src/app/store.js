import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../states/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
