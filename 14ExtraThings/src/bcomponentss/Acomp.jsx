import React from 'react'
import Bcomp from './Bcomp'

function Acomp({count}) {
  return (
    <div>
        <Bcomp count={count} />
    </div>
  )
}

export default Acomp