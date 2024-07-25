import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/User/UserSlice'

const Store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

export default Store