import { useContext } from "react";
import axios from "axios";
import { createContext } from "react";

import React ,{useEffect,useState} from 'react';
export const Login = () => {
  //  use reqres to log user in.
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  useEffect(()=>{

  },[]);
  function login(){
    axios.post("https://reqres.in/api/login",{
      email:email,
      password:pass,
    }).then((response)=>{
      console.log(response);
      
      loginuser(email);
    })
  }
 

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={(e)=>{
          setPass(e.target.value);
        }}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
export const LoginContext=createContext();
export const LoginContextProvider=({children})=>{
  const [username,setUsername]=useState("");
  function loginuser(user){
    setUsername(user)
  }
  return <LoginContext.Provider
  value={{userName,loginUser}}>{children}</LoginContext.Provider>
}
const {userName}=useContext(CartContext);
const {loginUser}=useContext(CartContext);