import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "userAuth",
  initialState: {
    isValid: null,
    data: null,
    location: null,
    token: null,
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
    updateUserLocation(state, action) {
      state.location = action.payload;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
