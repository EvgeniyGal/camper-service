import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    toggle(state, action) {
      const advertIndex = state.items.findIndex(
        ({ _id }) => _id === action.payload._id
      );
      if (advertIndex === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(advertIndex, 1);
      }
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;
