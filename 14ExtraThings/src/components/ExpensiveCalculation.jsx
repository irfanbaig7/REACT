import React, { useCallback, useEffect, useRef, useState } from 'react'

function ExpensiveCalculation() {


    const [count, setCount] = useState(0)
    const [input, setInput] = useState(0)

    // store privous rendering
    const priviousFunction = useRef(null)


    const expensiveTask = useCallback(() => {
        console.log("Running expensive Calculation..");
        let result = 0
        for (let i = 0; i < 1000000000; i++) {
            result += i

        }
        return result
    }, [count]) // new refrences ke sath nahi hoga rendering same refrence ke sath hi rahega but re render ho raha hai to to ye expensive calculation fhir se hogi


    // how to finding rendering using useEffect

    useEffect(() => {
        if (priviousFunction.current) {
            if (priviousFunction.current === expensiveTask) {
                console.log("Function not re-Created");
            } else {
                console.log("Function got re-created");
            }
        } else {
            priviousFunction.current = expensiveTask
        }
    }, [expensiveTask])

    return (
        <div>
            <input type="text" placeholder='Type Somthing' value={input} onChange={(e) => setInput(e.target.value)} />
            <p>Expensive Calculation : {expensiveTask()}</p>
            <button onClick={() => setCount(count + 1)}>Increse+</button>
        </div>
    )
}

export default ExpensiveCalculation