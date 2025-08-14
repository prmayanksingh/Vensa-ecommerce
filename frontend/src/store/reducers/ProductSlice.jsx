import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadlazyproduct: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { loadlazyproduct, removeProduct } = productReducer.actions;
export default productReducer.reducer;
