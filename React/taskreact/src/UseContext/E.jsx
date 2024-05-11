import React, { useContext } from 'react'
import { DataContext } from './A';



function E() {
  const {name,setName}=useContext(DataContext);
  return (
    <div>
        <button onClick={()=>setName("Nirav Nagar")}>Change from E </button>
        <h1>Hi i am E : {name}</h1>
    </div>
  )
}

export default E