"use client";

import { useState } from "react"
export default function Todo(){
    const [todos, setTodos]=useState<string[]>([]);
    const [value, setValue]=useState<string>("");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
    const submitValue=()=>{
        if(value.trim()!=" "){
            setTodos([...todos, value]);
            setValue("");
        }

    }
    const deleteTodo=(index:number)=>{
     const filter =todos.filter((todo, id)=> id!==index);
     setTodos(filter);
    }
    return (<>
                 <h1 className="text-center">Todo List</h1>
                <div className="flex items-center justify-center">
                   <input name="todo" value={value} onChange={handleChange} type="text" placeholder="Add a todo" className="bg-gray-200 p-2 rounded border border-gray-300 focus:outline-none "/>
                   <button onClick={submitValue} className="bg-blue-500 text-white p-2 rounded ml-2 cursor-pointer">Add</button>
                </div>
                 <div>
                    <ul className="mt-4 style-none px-20 ">
                        {todos.map((todo,index)=>
                        <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
                            <span>{todo}</span>
                            <div>
                            <button  className="bg-blue-500 text-white  rounded cursor-pointer mr-3 p-1 px-2" >Edit</button>
                            <button onClick={()=>deleteTodo(index)} className="bg-red-500 text-white p-1 rounded cursor-pointer px-2">Delete</button>
                            </div>
                        </li>
                            )}
                    </ul>
                 </div>
            </>
    )
}