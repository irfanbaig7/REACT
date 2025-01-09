import { useState, useEffect } from "react";

function useCurreny(curreny) {
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curreny}.json`)
    }, [])
}