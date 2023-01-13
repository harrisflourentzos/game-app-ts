import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type theme = "light" | "dark" | "auto";

const initialState = {
  theme: "light" as theme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice;
