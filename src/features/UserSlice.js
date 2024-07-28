import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
      profilePicture: null,
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
        profilePicture: null,
      }
    },
    setProfilePicture: (state, action) => {
      state.value = {
        ...state.value,
        profilePicture: action.payload,
      }
    },
  },
});

export const { login, logout, setProfilePicture } = authSlice.actions;
export default authSlice