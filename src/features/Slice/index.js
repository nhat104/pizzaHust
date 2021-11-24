import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.push(newProduct);
    },
  },
});

export const { addProduct } = cart.actions;

export default cart.reducer;
