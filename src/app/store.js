import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'features/Slice';
import loginReducer from 'features/Login/slice';

const rootReducer = {
  cart: cartReducer,
  login: loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
