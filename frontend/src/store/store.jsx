import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/UserSlice'
import productSlice from './reducers/ProductSlice'
import cartSlice from './reducers/CartSlice'

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice
  },
});
