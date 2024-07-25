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
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
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