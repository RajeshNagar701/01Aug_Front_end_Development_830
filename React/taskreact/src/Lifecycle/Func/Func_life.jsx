import React, { useState,useEffect } from 'react'
import Funclife_img from './Funclife_img'

function Func_life() {

    const [data, setData] = useState({
        number: 1,
        isImage: true
    })

    useEffect(()=>{
        console.log("Component Didmount/Update ");
    },[data.number]);

    return (
        <div className='container mt-5'>
            <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => setData({ ...data, number: data.number - 1 })}>-</button>
            <hr />
            <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
            {data.isImage ? <Funclife_img /> : null}
        </div>
    )
}

export default Func_life