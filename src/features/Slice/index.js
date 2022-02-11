import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  listProduct: JSON.parse(localStorage.getItem("cart")) || [],
  chooseProduct: {},
  loadingChoose: false,
  buySuccess: false,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ChooseProduct: (state, action) => {
      state.chooseProduct = action.payload;
      state.loadingChoose = true;
    },

    BackBtnClick: (state) => {
      state.chooseProduct = {};
      state.loadingChoose = false;
    },

    SubBtnClick: (state, action) => {
      const idx = action.payload;
      if (state.listProduct[idx].quantity === 1) {
        state.listProduct.splice(idx, 1);
      } else if (state.listProduct[idx].quantity > 1) {
        state.listProduct[idx].quantity = state.listProduct[idx].quantity - 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.listProduct));
    },

    AddBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct[idx].quantity = state.listProduct[idx].quantity + 1;
      state.chooseProduct = {};
      state.loadingChoose = false;
      localStorage.setItem("cart", JSON.stringify(state.listProduct));
    },

    DelBtnClick: (state, action) => {
      const idx = action.payload;
      state.listProduct.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(state.listProduct));
    },

    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.chooseProduct = {};
      state.loadingChoose = false;
      state.listProduct.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(state.listProduct));
    },

    addOldProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: v4(),
      };
      state.chooseProduct = {};
      state.loadingChoose = false;
      state.listProduct.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(state.listProduct));
    },

    buyAllRequest: (state) => {
      state.listProduct = [];
      state.buySuccess = true;
      localStorage.removeItem("cart");
    },

    turnOffBuySuccess: (state) => {
      state.buySuccess = false;
    },
  },
});

export const {
  addProduct,
  addOldProduct,
  ChooseProduct,
  AddBtnClick,
  SubBtnClick,
  DelBtnClick,
  BackBtnClick,
  buyAllRequest,
  turnOffBuySuccess,
} = cart.actions;

export default cart.reducer;
