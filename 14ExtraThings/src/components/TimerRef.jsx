import React, { useRef, useState } from 'react'

function TimerRef() {

  const [seconds, setSeconds] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }


  return (
    <div>
      <h2>Timer: {seconds}s</h2>
      <button onClick={startTimer} className='mr-2'>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default TimerRef