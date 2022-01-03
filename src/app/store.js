import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'features/Slice';
import authReducer from 'features/Authentication/slice';

const rootReducer = {
  cart: cartReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
