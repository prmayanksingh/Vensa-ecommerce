import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers:{
    loadproduct: (state, action)=>{
        state.products = action.payload;
    }
  }
});

export default productReducer.reducer;
