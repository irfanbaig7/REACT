

// why children on there and what exactliy work on them

import React, { useState } from 'react'
import userContext from '../context/userContext'

export default function UserContxtProvider({children}) {

  // Here is give some data!
  const [user, setUser] = useState(null)

  return (
    // here is we give access like props ex user, setuser like this this goan be passing Object.
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>   
  )
}
