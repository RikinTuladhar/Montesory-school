import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./counterSlice";
import mobileView  from "./mobileView";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    mobileView:mobileView
  },
});
