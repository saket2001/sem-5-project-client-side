import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      const isPresent = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (!isPresent) state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
