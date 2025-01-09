// import React, { useState } from "react";

// const App = () => {
//   // ****** Simple Counter ********

//   // const [count, setCount] = useState(0)

//   // const increase = () => {
//   //   setCount(count + 1)
//   // }

//   // const deincrease = () => {
//   //   setCount(count - 1)
//   // }

//   // ****** Submit Form Handling *******

//   // const submitHanddle = (e) => {
//   //   e.preventDefault()
//   //   console.log("Sucessfully");
//   // }

//   const [userName, setuserName] = useState("");
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(userName);
//     setuserName("");
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           value={userName}
//           onChange={(event) => {
//             setuserName(event.target.value);
//           }}
//           className="px-4 py-3 text-xl m-5 rounded"
//           type="text"
//           placeholder="Enter Your Name"
//         />
//         <button className="px-4 py-3 text-xl font-semibold bg-emerald-800 rounded m-5 text-white ">
//           Change ME
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

//  ********** Components *************

// import React from "react";
// import Navbar from "./components/Navbar";
// import Fuuter from "./components/Fuuter";

// const App = () => {
//   return (
//     <>

//       <Navbar />
//       <Fuuter />

//     </>
//   );
// };

// export default App;

// ********* Props *********

// import React from "react";
// import Card from "./components/card.jsx";

// ------ Use ForEach for access all json Data -------

// users.forEach(function (r) {
//   console.log(r);

// })

// use Map (made new array that are include with "Heyyy" 5 times)

// users.map(function () {
//   return "Heyyy"
// })

// const App = () => {
//   const users = [
//     {
//       name: "Alice Johnson",
//       city: "New York",
//       age: 28,
//       profession: "Software Engineer",
//       profilePhoto: "https://example.com/profiles/alice.jpg",
//     },
//     {
//       name: "Ravi Sharma",
//       city: "Mumbai",
//       age: 32,
//       profession: "Data Scientist",
//       profilePhoto: "https://example.com/profiles/ravi.jpg",
//     },
//     {
//       name: "Sophia Lopez",
//       city: "Los Angeles",
//       age: 25,
//       profession: "Graphic Designer",
//       profilePhoto: "https://example.com/profiles/sophia.jpg",
//     },
//     {
//       name: "Liam Brown",
//       city: "London",
//       age: 29,
//       profession: "Digital Marketer",
//       profilePhoto: "https://example.com/profiles/liam.jpg",
//     },
//     {
//       name: "Mei Wang",
//       city: "Beijing",
//       age: 27,
//       profession: "UX/UI Designer",
//       profilePhoto: "https://example.com/profiles/mei.jpg",
//     },
//   ];

//   return (
//     <div>
//       <div className="p-10">
//         {users.map(function (elem, idx) {
//           return (
//             <Card
//               key={idx}
//               username={elem.name}
//               city={elem.city}
//               age={elem.age}
//               profession={elem.profession}
//               profilePhoto={elem.profilePhoto}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

// ************ API (Axios) *************

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");

//     setData(response.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="p-10">
//       {/* <button
//         onClick={getData}
//         className="bg-teal-700 text-white font-semibold text-xxl px-6 py-3 rounded-md active:scale-90"
//       >
//         Get Data
//       </button> */}
//       <div className="p-5 bg-gray-900">
//         {data.map(function (elem, idx) {
//           return (
//             <div
//               key={idx}
//               className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3"
//             >
//               <img className="h-40" src={elem.download_url} alt="" />
//               <h1>{elem.author}</h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;



// **************  React Router DOM  ***************

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Header from './components/Header'

// const App = () => {
//   return (
//     <div>
//       <Header />
//       Sakshi I love Yarr
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/product' element={<Product />} />
//       </Routes>
//     </div>
//   )
// }

// export default App



// ***********  Context API  ***********

import React, { useContext } from 'react'
import SecHeader from './components/SecHeader'
import Section from './components/Section'
import SecFooter from './components/SecFooter'
import { DataContext } from './context/UserContext'


const App = () => {

  const data = useContext(DataContext)
  
  

  return (
    <div>
      <h1>This is App.jsx  {data.age} </h1>
      <SecHeader />
      <Section />
      <SecFooter />
    </div>
  )
}

export default App
