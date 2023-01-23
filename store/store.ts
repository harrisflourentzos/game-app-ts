import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import userNumberSlice from "./userNumber-slice";

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [userNumberSlice.name]: userNumberSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
