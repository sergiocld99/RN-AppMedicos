import { createSlice } from "@reduxjs/toolkit";

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    value: {
      specialtySelected: null,
      doctorIdSelected: null,
    },
  },
  reducers: {
    setSpecialtySelected: (state, action) => {
      state.value.specialtySelected = action.payload;
    },
    setDoctorIdSelected: (state, action) => {
      state.value.doctorIdSelected = action.payload;
    },
  },
});

// Exportar las acciones
export const { setSpecialtySelected, setDoctorIdSelected } = doctorsSlice.actions;