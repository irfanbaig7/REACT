import { useState, useEffect } from "react"

function useWindowWidth() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleResize = () => setWidth(window.innerWidth) 
        window.addEventListener("resize", handleResize)
        console.log("mounting");  

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Cleaning");      
        }
    }, [])
    
    return width

}

export default useWindowWidth