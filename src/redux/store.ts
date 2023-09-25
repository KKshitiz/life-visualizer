// ** Toolkit imports
import {
  PayloadAction,
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import home from "./reducers/homeSlice";

export const store = configureStore({
  reducer: {
    home,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { createAsyncThunk, createSlice };
export type { PayloadAction };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
