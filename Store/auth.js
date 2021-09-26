import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "userAuth",
  initialState: {
    isValid: true,
    data: "6141ef2563a1d60d48acd955",
  },
  reducers: {
    //   for changing the auth signed in or signup status
    updateStatus(state) {
      state.isValid = !state.isValid;
    },
    //   for storing any user data in redux (mostly user id)
    updateUserData(state, action) {
      state.data = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
