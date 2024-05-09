import React from 'react'

function E({name,setName}) {
  return (
    <div>
        <button onClick={()=>setName("Nirav Nagar")}>Change from E</button>
        <h1>Hi i am E : {name}</h1>
    </div>
  )
}

export default E