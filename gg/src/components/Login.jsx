import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    useEffect(() =>{
       
    }, [])

    function login() {
         axios
           .post("https://reqres.in/api/login", {
             email: email,
             password: pass,
           })
           .then((response) => {
             console.log(response);
           });
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
          />
          <button onClick={() =>{login()}}>Login</button>
    </div>
  );
}

export default Login