import { useState, useMemo } from 'react';
import ListForMemo from './ListForMemo';

function UseMemo() {
    const [count, setCount] = useState(0);

    // const users = ["irfan", "ali", "fatima"]; // this thing again an again re-render when component change, every re-rendering and creatig again agian new array, isliye ye sahi nahi hai 
    const users = useMemo(() => {       // yaha ek bar hi create ho raha hai array aur usko cashe me store kar ke rakh leta hai taki next time re-rendring me fhir se create na ho just yahi final result use ho 
        return ["irfan", "ali", "fatima"];
    }, []);



    const handleClick = () => {
        console.log("Clicked!");
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ListForMemo users={users} onClick={handleClick} />
        </div>
    );
}

export default UseMemo