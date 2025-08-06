import React, { useEffect, useState } from 'react'

function UseEffeWithCounter() {

    const [count, setCount] = useState(1)


    // Mounting (Component mount hone ke baad run hota hai)

    // useEffect(() => {
    //     console.log("Component Mounted");
    // }, []); // empty dependency array => sirf ek baar run hoga


    // Updating (state ya props change hone pr chalega)

    // useEffect(() => {    
    //     console.log("State or props changed");
    // }, [count])


    // Cleanup (Component remove hone ke time chalega)

    useEffect(() => {
        console.log("Mounted or count changed ");
        return () => { 
            console.log("Cleanup before next ");
        };
    }, [count]);



    return (
        <div>

            <h1>Learing about useEffect</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>

        </div>
    )
}

export default UseEffeWithCounter