import { useState } from "react";
import {TodoInput} from "./todoinput";

function Todo(){
    const [todolist,setTodolist]=useState([]);

    const getData=(todo)=>{
        setTodolist([...todolist,todo]);
    }
    return (
        <div>
            <TodoInput getData={getData}/>
            {todolist.map((e)=>{
                <div>{e}</div>
            })}
        </div>
    );
}
export {Todo};