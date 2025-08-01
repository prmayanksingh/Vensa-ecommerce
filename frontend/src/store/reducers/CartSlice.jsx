import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: null,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  
  reducers:{
    loadcart: (state, action)=>{
        state.carts = action.payload;
    }
  }
});

export default cartReducer.reducer;
