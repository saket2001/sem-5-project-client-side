import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    isOn: false,
  },
  reducers: {
    toggleModal(state, action) {
      state.isOn = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
