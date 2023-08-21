// ./redux/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'datas',
  initialState: [],
  reducers: {
    setData: (state, action) => { // for start with existing records
      return action.payload;
    },
    addData: (state, action) => {
      // return [...state, action.payload];
      state.push(action.payload);
    },
    updateData: (state, action) => {
      // const updatedData = state.map((data) =>
      //   data.name === action.payload.name ? action.payload : data
      // );
      // return updatedData;
      const { name, description } = action.payload;
      const dataToUpdate = state.find(data => data.name === name);
      if (dataToUpdate) {
        dataToUpdate.name = name;
        dataToUpdate.description = description;
      }
    },
    deleteData: (state, action) => {
      // return state.filter((data) => data.name !== action.payload);
      const nameToDelete = action.payload;
      return state.filter(data => data.name !== nameToDelete);
    },
  },
});

export const { setData, addData, updateData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
