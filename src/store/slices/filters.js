import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  location: "",
  features: {
    equipment: [],
    type: [],
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
    setDefault: () => INITIAL_STATE,
  },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice;
