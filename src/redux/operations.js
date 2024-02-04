import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65bb5adc52189914b5bbd5c1.mockapi.io/cars/api/v1';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (url, rejectWithValue) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return rejectWithValue.rejectWithValue(e.message);
    }
  }
);

export const addFavorites = createAction('cars/addFavorites', car => {
  return {
    payload: car,
  };
});

export const removeFavorites = createAction('cars/removeFavorites', id => {
  return {
    payload: id,
  };
});
