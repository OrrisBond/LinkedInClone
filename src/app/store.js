import { configureStore } from "@reduxjs/toolkit";
import usrReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: usrReducer,
  },
});
