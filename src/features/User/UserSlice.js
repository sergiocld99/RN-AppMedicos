import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
    }
  },
  reducers: {
    login: (state, action) => {
      state.value = {
        ...state.value,
        user: action.payload.data.email,
        token: action.payload.data.idToken,
        localId: action.payload.data.localId,
      }
    },
    logout: (state) => {
      state.value = {
        ...state.value,
        user: null,
        token: null,
        localId: null,
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice