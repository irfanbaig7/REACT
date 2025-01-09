import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/Todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducers,
});
