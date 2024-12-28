import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
    },
    updateUserStart: (state) => {
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
    },
    signOutUserStart: (state) => {
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
} = userSlice.actions;

export default userSlice.reducer;
