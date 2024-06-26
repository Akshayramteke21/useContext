import React, { useContext, useState } from "react";
import UserContext from "../UserContext";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h2>LOGIN</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />
      <br/>

      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      /><br/>

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
