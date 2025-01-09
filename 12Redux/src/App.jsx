import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementHandle() {
    dispatch(increment());
  }

  function decrementHandle() {
    dispatch(decrement());
  }

  function resetHandle() {
    dispatch(reset());
  }

  function amountHandle() {
    dispatch(incrementByAmount(amount));
  }

  const [amount, setamount] = useState(0);

  return (
    <div id="container">
      <button onClick={incrementHandle}>+</button>
      <p>Count: {count}</p>
      <button onClick={decrementHandle}>-</button>
      <br />
      <button id="btn" onClick={resetHandle}>
        RESET
      </button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setamount(e.target.value)}
      />
      <br />
      <br />
      <button id="btn" onClick={amountHandle}>
        Increment By Amount
      </button>
    </div>
  );
};

export default App;
