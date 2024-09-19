//create a slice
//initialize initial state
//slice -> name, initialState, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducers = cartSlice.reducer;

export { cartReducers as default, addToCart, removeFromCart };
