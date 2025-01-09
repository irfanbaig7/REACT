import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";



function MyApp() {
  return (
    <>
      <h1>This is a MyApp inner from main.jsx</h1>
    </>
  )
}


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to Visit Google",
// };


const AnotherElement = (
  <a href="https://google.com" target="_blank"> Visit Google Baba</a>
)

const anotherUser = "Aman is react"


const ReactElement = React.createElement(
  'a',
  {href: "https://google.com"},
  'Click me to Vist Google Officale Site',
  anotherUser
)



ReactDOM.createRoot(document.getElementById("root")).render(

    // MyApp() 
    // <MyApp />

    // <AnotherElement />
    ReactElement
    // <App />
   

);
