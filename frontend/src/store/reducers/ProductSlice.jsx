import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadproduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { loadproduct } = productReducer.actions;
export default productReducer.reducer;
