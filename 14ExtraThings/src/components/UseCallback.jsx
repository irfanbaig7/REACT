import React, { useCallback, useState } from 'react'
import UseCallbackChild1 from './UseCallbackChild1'

/* 
a usememo basically jo hamara result hota hai expensive task ka usko meoize yani
store karke rakhta hai next render pe again se puri calculation me time waste na ho
remember same calculation yani least resently agar calculation change 
hue to again se re render hoga aur ye, aur ek baat ye dependency bhi rakhta hai yani 
sirf calculation ke changes me hi wo re render karwata hai other wise sate change 
pr nahi kyunki ham ne sirf dependency me wahi diya hai jo calculation ko change 
krta hai hame ne dusri koyi dependency nahi di

aur wahi pr usecallback bhi similar hai like ye thoda adavance mano bcz ye 
basically ham jo function creat karte hai to dom me uska refrence bhi banta hai 
aur har re render pr naya refrence yani re creation hoti hai jo ki 
un optimize Tarika hai wahi pr ham agr usecall ka use kare to ham re render to nahi rokenge
but re creation jo jo rokte hai and same yaha pr bhi dependencies hoti hai jo is callback ko 
re render karwati hai agr na do dependency to ek callback ke andr ka frist parameter jo ek
function hota hai wo frezz ho jata hai    
*/

function UseCallback() {

    const [count, setCount] = useState(0)

    // function handleClick() { // use kiya tha jab React.memo kiya tha
    //     setCount(count + 1)
    // }

    const handleClick = useCallback(() => {
            setCount(count + 1)
        }, [count]
    )

    return (
        <div>
            <div>UseCallback</div>
            <br />

            <div>
                Count : {count}
            </div>

            <div>
                <button onClick={handleClick}>Increment</button>
            </div>

            <UseCallbackChild1 buttonName="Click me Anytime" handleClick={handleClick} />
        </div>

    )
}

export default UseCallback