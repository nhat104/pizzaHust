import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('usernameHUST') || '',
  token: localStorage.getItem('tokenHUST') || '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('usernameHUST');
      localStorage.removeItem('tokenHUST');
      state.username = '';
      state.token = '';
    },
    saveDataLogin: (state, action) => {
      localStorage.setItem('usernameHUST', action.payload.username);
      localStorage.setItem('tokenHUST', action.payload.token);
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

export const { logout, saveDataLogin } = auth.actions;

export default auth.reducer;
