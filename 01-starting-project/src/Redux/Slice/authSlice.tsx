import { createSlice } from "@reduxjs/toolkit";

interface tokenState {
  token: string;
}

const initialState: tokenState = {
  token: "",
};

export const slice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    getAuthToken: (state: any, { payload }) => {
      state.token = payload;
    },
  },
});

export const { getAuthToken } = slice.actions;

export default slice.reducer;
