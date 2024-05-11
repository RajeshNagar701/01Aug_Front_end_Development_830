/*
YOU PAS STATE A TO E Prop Drilling?
PROBLEM IS NOT REQUIREMENT IN B,C,D SO ITS SLOW PROCEES
SO now sollution useContext(),createContext() hooks introduced

React Context

createContext();  create context & store state in value 
useContext();    access context & access all state global

React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components 
more easily than with useState alone.

*/



import React, { createContext, useState } from 'react'
import B from './B'
export const DataContext=createContext();

function A() {

    const [name, setName] = useState("Rajesh Nagar");
    return (
        <div>
            <DataContext.Provider value={{name,setName}}>
                <button onClick={()=>setName("Akash Nagar")}>Change from A</button>
                <h1>Hi i am A : {name}</h1>
                <B name={name} setName={setName}/>
            </DataContext.Provider>
        </div>
    )
}

export default A