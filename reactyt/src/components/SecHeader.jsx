import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const SecHeader = () => {

    const username = useContext(DataContext)
  return (
    <div>
        <h1>SecHeader {username.age}</h1>
    </div>
  )
}

export default SecHeader