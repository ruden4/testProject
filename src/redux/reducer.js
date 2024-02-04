import { combineReducers } from 'redux';
import { carsReducer } from './carsSlice';

export const reducer = combineReducers({
  cars: carsReducer,
});