import { useState } from "react";

function useToggle() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisible = () => {
        setIsVisible(!isVisible)
    }

    return [isVisible, toggleVisible]
}

export default useToggle