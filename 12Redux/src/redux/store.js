import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "../features/counter/  CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterreducer,
  },
});
