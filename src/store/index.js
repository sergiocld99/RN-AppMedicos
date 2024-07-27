import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/UserSlice";
import { authApi } from "../services/authService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { doctorListApi } from "../services/doctorListService";
import { doctorsSlice } from "../features/DoctorsSlice";

/**
 * Configuración del store de Redux
 */
const store = configureStore({
  // Añadir los reducers
  reducer: {
    auth: authSlice.reducer,
    doctors: doctorsSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [doctorListApi.reducerPath]: doctorListApi.reducer,
  },
  // Añadir los middlewares de las API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(doctorListApi.middleware),
});

// Habilitar listeners para las acciones de la API
setupListeners(store.dispatch);

export default store;
