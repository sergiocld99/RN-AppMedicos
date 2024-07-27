import { createSlice } from "@reduxjs/toolkit";

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    value: {
      specialtySelected: null,
    },
  },
  reducers: {
    setSpecialtySelected: (state, action) => {
      state.value.specialtySelected = action.payload;
    },
  },
});