import { createSlice } from "@reduxjs/toolkit";

export const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    value: {
      specialtySelected: null,
      doctorIdSelected: null,
      locationSelected: null,
    },
  },
  reducers: {
    // Establecimiento de la especialidad seleccionada
    setSpecialtySelected: (state, action) => {
      state.value.specialtySelected = action.payload;
    },
    // Establecimiento del ID del doctor seleccionado
    setDoctorIdSelected: (state, action) => {
      state.value.doctorIdSelected = action.payload;
    },
    // Establecimiento de la ubicación seleccionada
    setLocationSelected: (state, action) => {
      state.value.locationSelected = action.payload;
    },
  },
});

// Exportar las acciones
export const {
  setSpecialtySelected,
  setDoctorIdSelected,
  setLocationSelected,
} = doctorsSlice.actions;
