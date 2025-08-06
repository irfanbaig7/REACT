import React from 'react'
import Ccomp from './Ccomp'

function Bcomp({count}) {
  return (
    <div>
        <Ccomp count={count}/>
    </div>
  )
}

export default Bcomp