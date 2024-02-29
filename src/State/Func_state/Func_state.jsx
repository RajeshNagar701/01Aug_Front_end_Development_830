
/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

1)Class Component

constructor() {
    super();
    this.state = {
            brand: "Ford",
            model: "Figo",
            year: ""2018
        };
  }

  {this.state.brand}
  this.setState({brand:"Maruti",model:"2020"});


2)Func Component  Introduced Hooks (useState)

import react,{useState} from 'react'

const [data,setobj]=useState({
      brand: "Ford",
      model: "Figo",
      year: ""2018
})

{data.model}
setobj({...data,brand:"Maruti",model:"2020"})
*/

import React, { useState } from 'react'
import State_img from './State_img';


function Func_state() {

    const [email, setEmail] = useState("rajeshnagarn@gmail.com");

    const [data, setData] = useState({
        name: "Raj nagar",
        age: 34,
        number: 1,
        isImage: true
    })

    const minus = () => {
        if (data.number > 0) {
            setData({ ...data, number: data.number - 1 });
        }
    }
    return (
        <div className='container mt-5'>
            <button onClick={() => setEmail("akashpatel@gmail.com")}>Change</button>
            <h1>{email}</h1>

            <hr />

            <button onClick={() => setData({ ...data, name: "Rajesh nagar", age: 33 })}>Change</button>
            <h1>My name is <u>{data.name}</u> and my age is <u>{data.age}</u></h1>


            <hr />

            <button onClick={() => setData({ ...data, number: data.number + 1 })} className='btn btn-primary'>+</button>
            <h1>{data.number}</h1>
            <button onClick={minus} className='btn btn-primary'>-</button>

            <hr className='mb-5' />

            <button onClick={() => setData({ ...data, isImage: false })} className='btn btn-primary mb-5'>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })} className='btn btn-primary mb-5'>Show</button>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })} className='btn btn-primary mb-5'>Hide / Show</button>
            {data.isImage ? <State_img /> : null}


        </div>
    )
}

export default Func_state