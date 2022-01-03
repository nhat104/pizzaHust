import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  token: '',
};

const auth = createSlice({
  name: 'auth',
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

export const { logout, saveDataLogin } = auth.actions;

export default auth.reducer;
