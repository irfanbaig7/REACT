import React from 'react'

const UseCallbackChild1 = React.memo(({ buttonName, handleClick }) => {
    console.log("Child component re-rendering again");       
    return (
        <div>
            <button onClick={handleClick}>{buttonName}</button>
        </div>
    )
}

)

export default UseCallbackChild1