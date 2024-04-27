import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {name: ""},
  reducers: {
    filterContacts: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

//Selectors
export const selectorFilter = (state) => state.filter.name;
