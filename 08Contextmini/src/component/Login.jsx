import React, { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        placeholder="User-Name Likhoo"
      />
      {" "}
      <input
        type="password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        placeholder="Password Likhoo"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
