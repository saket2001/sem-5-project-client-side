import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { cartSlice } from "./cart";
import { modalSlice } from "./modal";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
