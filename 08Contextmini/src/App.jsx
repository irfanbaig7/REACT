
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContxtProvider'
function App() {

  return (
    <UserContextProvider>
      <h1>Helllooo Oyeeee</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
