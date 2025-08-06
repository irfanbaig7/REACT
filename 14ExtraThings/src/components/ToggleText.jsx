import React, { useState } from 'react'

function ToggleText() {

    const [show, setShow] = useState(false)

    const showDeatil = () => {
        setShow(!show)
    }

  return (
    <div>
        <button onClick={showDeatil}>{show ? "Hide text" : "Show text"}</button>
        {show && (
            <p>Hello irfan this is React Journey</p>
        )}
    </div>
  )
}

export default ToggleText