import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
