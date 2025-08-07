import React, { useRef } from 'react'

function Useref() {


    const inputRef = useRef(null)
    console.log(inputRef);
    

  return (
    <div>
        <input type="text" placeholder='Enter your name' ref={inputRef} /> 
        <button onClick={() => inputRef.current.focus()}>Focus input</button>
    </div>
  )
}

export default Useref