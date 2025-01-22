import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import "./App.css";
import authService from '../src/appwrite/auth'
import { login, logOut} from '../src/store/authSlice.js'
import { Header, Footer} from '../src/components'
// import { Outlet } from "react-router-dom";


function App() {

  // Make state for Loading
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logOut())
      }
    })
    .finally(() => setloading(false))
  
  
  }, [dispatch])
  







  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
