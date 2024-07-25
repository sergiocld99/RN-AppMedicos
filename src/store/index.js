import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/User/UserSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

export default store