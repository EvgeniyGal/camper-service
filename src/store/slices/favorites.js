import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    toggle(state, action) {
      state.items = state.items.includes(action.payload)
        ? state.items.filter((id) => id !== action.payload)
        : [...state.items, action.payload];
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;
