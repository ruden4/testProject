import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, addFavorites, removeFavorites } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addFavorites, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFavorites, (state, action) => {
        state.favorites = state.favorites.filter(({id}) => id !== action.payload);
      })
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

export const carsReducer = persistReducer(carsPersistConfig, carsSlice.reducer);
