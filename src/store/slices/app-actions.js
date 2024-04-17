import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isModalDetailsOpen: false,
  currentAdvert: "",
};

const appActionsSlice = createSlice({
  name: "appActions",
  initialState: INITIAL_STATE,
  reducers: {
    toggleModalDetails: (state) => {
      state.isModalDetailsOpen = !state.isModalDetailsOpen;
    },
    setCurrentAdvert: (state, action) => {
      state.currentAdvert = action.payload;
    },
  },
});

export const appActionsActions = appActionsSlice.actions;
export default appActionsSlice;
