import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  token: '',
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.username = '';
      state.token = '';
    },
    saveDataLogin: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

export const { logout, saveDataLogin } = login.actions;

export default login.reducer;
