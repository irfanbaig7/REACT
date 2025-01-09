import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  
  let myObj = {
    userName : "irfan",
    age : 21
  }

  let newArr = [1, 2, 3, 4]


  return (
    <>
      <h1 className='bg-green-600 text-black p-4 mb-8'>Tailwind Test</h1>     
      <Card userName="Irfan baig" locaTion="Banglore" /> 
      /* <Card userName="Sakshi Jadhav" />

      {/* <h2 className='mb-5'>Counter Value : {counter}</h2>

      <button onClick={addValue} className='mr-4'>Add Value</button>
      <button onClick={removeValue}>Removee Value</button> */}
    </>
  )
}

export default App
