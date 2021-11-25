import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  listProduct: [],
  chooseProduct: {},
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    chooseProduct: (state, action) => {
      state.chooseProduct = action.payload;
    },

    SubBtnClick: (state, action) => {
      const idx = action.payload;
      if (state.listProduct[idx].quantity === 1) {
        state.listProduct.splice(idx, 1);
      } else if (state.listProduct[idx].quantity > 1) {
        state.listProduct[idx].quantity = state.listProduct[idx].quantity - 1;
        state.listProduct[idx].cost =
          state.listProduct[idx].cost - state.listProduct[idx].unitCost;
      }
    },

    AddBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct[idx].quantity = state.listProduct[idx].quantity + 1;
      state.chooseProduct = {};
      state.listProduct[idx].cost =
        state.listProduct[idx].cost + state.listProduct[idx].unitCost;
    },

    DelBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct.splice(idx, 1);
    },

    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.chooseProduct = {};
      state.listProduct.push(newProduct);
    },

    addOldProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: v4(),
      };
      state.chooseProduct = {};
      state.listProduct.push(newProduct);
    },
  },
});

export const {
  addProduct,
  addOldProduct,
  chooseProduct,
  AddBtnClick,
  SubBtnClick,
  DelBtnClick,
} = cart.actions;

export default cart.reducer;
