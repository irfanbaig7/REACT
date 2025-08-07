import React, { useMemo, useState } from 'react'

function UseMemo2() {


    const [count, setCount] = useState(0)
    const [input, setInput] = useState(0)


    function expensiveTask(num) { // jab count update hota hai tab component re-render hota hai and fhir se ye function creation, inside uske jo loop hai wo pura hota hai calling again hoti hai same thing repeated again and again whenever re-rendering the components ye kafi slow kar deta hai application ko isiye hame use krenge useMemo
        console.log("Inside Expensive Task");
        for (let i = 0; i < 100000000; i++) {}
        return num * 2 
    }

    // let doubleValue = expensiveTask(input) // bad approch
    
    // useMemo kuch input doge uske corsponding jo result ayega usko stor kar lunga agli bar jab re rendring hogi wahi result de dunga naki puri proccess repeat karunga 
    // unaceessery expensiveTaks ko bchana hai hone se to use karenge useMemo jo cashe karke rakhenga 
    // last used value hi minoize raheti hai, agr new di to fhir se expensive task render hoga sratch se
    let doubleValue = useMemo(() => expensiveTask(input), [input])
    
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <div>
            Count : {count}
        </div>

        <div>
            <input type="text" placeholder='Enter the Number' value={input} onChange={(e) => setInput(e.target.value) } />
        </div>

        <div>
            DoubleValue : {doubleValue}
        </div>
    </div>
  )
}

export default UseMemo2