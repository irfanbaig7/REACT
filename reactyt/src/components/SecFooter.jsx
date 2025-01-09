import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const SecFooter = () => {

    const username = useContext(DataContext)
  return (
    <div>
        <h1>SecFooter {username.city}</h1>
    </div>
  )
}

export default SecFooter