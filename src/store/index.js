import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/User/UserSlice'
import { authApi } from '../services/authService'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

// Habilitar listeners para las acciones de la API
setupListeners(store.dispatch)

export default store