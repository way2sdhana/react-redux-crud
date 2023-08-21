// ./redux/reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import datasReducer from './dataSlice';

const rootReducer = combineReducers({
  datas: datasReducer,
});

export default rootReducer;
