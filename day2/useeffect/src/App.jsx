import { Hello } from './components/hello';
import { useEffect, useState } from 'react';

import './App.css'

function App() {
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
   const data=async function getData(){
      fetch("https://localhost:8080/comments")
      .then((d)=>
      d.json()
      );
      setTodos(data);
    }
    getData();
  },[]);
 
  return (
    <div className="App">
      {todos.map((e)=>(
        <div>{e}</div>
      ))}
    </div>
  )
}

export default App
