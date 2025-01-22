import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {  
      state.value += Number(action.payload);
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { increment, decrement, incrementByAmount, reset } = CounterSlice.actions;

export default CounterSlice.reducer;
