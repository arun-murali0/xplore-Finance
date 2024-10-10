import { configureStore } from "@reduxjs/toolkit";
import User from "./userSlice";

export const Store = configureStore({
  reducer: {
    user: User,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
