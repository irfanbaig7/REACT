import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)
    
    useEffect(() => {
        console.log("Timer started !!");

        const intervel = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(intervel)
            console.log("Timer cleaned Up");

        }
    }, [])


    return (
        <div>
            <h2>{seconds} seconds passed</h2>
        </div>
    )
}

export default Timer