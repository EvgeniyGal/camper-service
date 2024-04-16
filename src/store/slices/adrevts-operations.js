import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "../../utils/camper-service-api";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getAdverts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
