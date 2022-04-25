import { useState } from "react";
export const TodoInput=function({getData}){
   const [text,setText]=useState("");
    return (
        <div>
            <input
            onChange={(e)=>{
                console.log(e.target.value)
                setText(e.target.value);
            }}
            type="text"
            placeholder="Enter Todo"/>
            <button
            onClick={()=>{
                getData(text);
            }}>Add Todo</button>
        </div>
    );
}