import React, { } from 'react'
import Ccompo from './Ccompo'

function Bcompo({ setCount }) {

  return (
    <div>
      <button onClick={() => setCount(previous => previous + 1)}>Increment</button>
    </div>
  )
}

export default Bcompo