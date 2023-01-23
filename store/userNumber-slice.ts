import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type nullableNumber = number | null;

const initialState = {
  num: null as nullableNumber,
};

const userNumberSlice = createSlice({
  name: "userNumber",
  initialState: initialState,
  reducers: {
    setUserNumber: (state, action: PayloadAction<nullableNumber>) => {
      state.num = action.payload;
    },
  },
});

export const { setUserNumber } = userNumberSlice.actions;
export default userNumberSlice;
