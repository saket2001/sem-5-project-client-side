import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "userAuth",
  initialState: {
    isValid: null,
    data: null,
  },
  reducers: {
    //   for changing the auth signed in or signup status
    updateStatus(state, action) {
      state.isValid = action.payload;
    },
    //   for storing any user data in redux (mostly user id)
    updateUserData(state, action) {
      state.data = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
