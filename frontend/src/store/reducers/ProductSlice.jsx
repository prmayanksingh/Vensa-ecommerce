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
  },
});

export const { loadlazyproduct } = productReducer.actions;
export default productReducer.reducer;
