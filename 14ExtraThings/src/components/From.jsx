import React, { useState } from 'react'

function From() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault() // prevent page relode 
        console.log("From Submited", {email, password});
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                value={email}    
                placeholder='Enter Your name'
                onChange={(e) => setEmail(e.target.value) }
            />
            <input 
                type="password"
                value={password}    
                placeholder='Enter Your name'
                onChange={(e) => setPassword(e.target.value) }
            />
            <button disabled={!email || !password}>Submit</button>
        </form>
    </div>
  )
}

export default From