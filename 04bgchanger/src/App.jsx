// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      className="flex justify-center h-screen w-full items-end"
      style={{ backgroundColor: color, transition: "background-color 0.2s ease-in-out" }}>
      <div className="h-20 w-[80%] flex items-center justify-center gap-3 border bg-gray-800 rounded-xl mb-40">
        <button
          onClick={() => setColor("Blue")}
          className="p-3 text-white border-none rounded-lg"
          style={{ backgroundColor: "blue" }}>
          blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="p-3 border-none  rounded-lg text-white"
          style={{ backgroundColor: "green" }}>
          green
        </button>
        <button
          onClick={() => setColor("Yellow")}
          className="p-3 border rounded-md "
          style={{ backgroundColor: "yellow" }}>
          Yellow
        </button>
        <button
          onClick={() => setColor("Pink")}
          className="p-3 border rounded-md "
          style={{ backgroundColor: "pink" }}>
          Pink
        </button>
        <button
          onClick={() => setColor("red")}
          className="p-3 border rounded-md text-white"
          style={{ backgroundColor: "red" }}>
          Red
        </button>
      </div>
    </div>
  );
};

export default App;
