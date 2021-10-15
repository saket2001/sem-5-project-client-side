import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    isOn: false,
  },
  reducers: {
    toggleModal(state) {
      state.isOn = !state.isOn;
    },
  },
});

export const modalActions = modalSlice.actions;
