import productsReducer from '../store/productsSlice';
import { configureStore } from '@reduxjs/toolkit';
import cardsListReducer from '../store/cardsListSlice';

export const store = configureStore({
  reducer: {
    cardsList: cardsListReducer,
    products: productsReducer
  },
});
  
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
