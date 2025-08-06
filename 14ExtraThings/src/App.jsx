// import { useState, useCallback, useEffect, useRef } from "react";

// const App = () => {
//   // useState() Hook

//   const [length, setlength] = useState(8);
//   const [numAllow, setnumAllow] = useState(false);
//   const [charAllow, setcharAllow] = useState(false);
//   const [password, setpassword] = useState("");

//   // useRef() Hook

//   const passwordRef = useRef(null);

//   // Make Password Generator

//   const passwordGeneretor = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numAllow) str += "0123456789";
//     if (charAllow) str += "!@#$%^&*()";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }

//     setpassword(pass);
//   }, [length, numAllow, charAllow, setpassword]);

//   // Copy Clipboard
//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 10);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   // useEffect() hook

//   useEffect(() => {
//     passwordGeneretor();
//   }, [length, numAllow, charAllow, passwordGeneretor]);

//   return (
//     <div>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-800">
//         <h1 className="text-white text-center mb-2">Password Generator</h1>
//         <div className="flex overflow-hidden shadow rounded-lg mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3 rounded-r-lg"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             className="bg-blue-600 text-white rounded-l-lg ml-3 py-2 px-2"
//             onClick={copyPasswordToClipboard}>
//             Copy
//           </button>
//           <button
//             className="bg-blue-600 text-white rounded-l-lg ml-3 py-2 px-2"
//             onClick={passwordGeneretor}>
//             generatePass
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-4">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={8}
//               max={16}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setlength(e.target.value);
//               }}
//             />
//             <label>Length : {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               className="cursor-pointer"
//               id="numberInput"
//               onChange={() => {
//                 setnumAllow((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               className="cursor-pointer"
//               id="charInput"
//               onChange={() => {
//                 setcharAllow((prev) => !prev);
//               }}
//             />
//             <label htmlFor="charInput">Character</label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



// --------------------------------------------------------------------------------------------------

import React, { useState } from 'react'
import ToggleText from './components/ToggleText'
import LoginForm from './components/LoginFrom'
import FriutList from './components/FriutList'
import From from './components/From'
import Bcompo from './components/Bcompo'
import Ccompo from './components/Ccompo'
import Acomp from './bcomponentss/Acomp'
import UseEffeWithCounter from './components/UseEffeWithCounter'
import Timer from './components/Timer'

export default function App() {

  // const [count, setCount] = useState(0)
  const [showTimer, setShowTimer] = useState(true)

  return (
    <div>
      {/* <ToggleText /> */}
      {/* <LoginForm /> */}
      {/* <FriutList /> */}
      {/* <From /> */}

      {/* Lifting State */}
      {/* <Bcompo setCount={setCount}/> */}
      {/* <Ccompo count={count}/> */}

      {/* propDrilling */}
      {/* <Acomp count={count} /> */}

      {/* 3 Lifecycle Phases Covered by useEffect : mounting, updating, unMounting */}
      {/* <UseEffeWithCounter /> */}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>

      {showTimer && <Timer />}





    </div>
  )
}






