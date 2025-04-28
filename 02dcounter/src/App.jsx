import React from "react";
import { useState } from "react";

const App = () => {

  let [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter >= 0) {
      counter++;
    }

    setCounter(counter);
  };

  const decrease = () => {
    if (counter > 0) {
      counter--;
    } else {
      counter = 0;
    }
    setCounter(counter);
  };


  return (

    <div>
      <h1 className="text-yellow-500 text-center mb-3 text-2xl">
        Counter : {counter}
      </h1>
      <button
        onClick={increase}
        className="py-2 border-sky-500 border px-2 rounded-lg mr-3">
        Increase
      </button>
      <button
        onClick={decrease}
        className="py-2 border-sky-500 border px-2 rounded-lg">
        Decrease
      </button>
    </div>

  );
};

export default App;
