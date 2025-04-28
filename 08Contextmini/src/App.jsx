import React from 'react'
import UserContxtProvider from './context/UserContxtProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return (
    
    <UserContxtProvider>
      <h1>kay chalu he</h1>
      <Login /> 
      <Profile />
    </UserContxtProvider>
  )
}

