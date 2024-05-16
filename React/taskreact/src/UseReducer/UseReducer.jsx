/*
The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, 
useReducer may be useful.

The useReducer Hook accepts two arguments.

useReducer(<reducer>, <initialState>)

*/
import React, { useReducer } from 'react'
import ReducerImg from './ReducerImg';

function UseReducer() {

const initialState={
    name:"Raj nagar",
    number:1,
    isImage:true
}
const reducer=(state,action)=>{
    
    if(action.type=="CHANGE"){
        return {...state,name:"Akash nagar"}  
    }
    if(action.type=="PLUS"){
        return {...state,number:state.number+1}      
    }
    if(action.type=="MINUS"){
        return {...state,number:state.number-1}  
    }
    if(action.type=="HIDE"){
        return {...state,isImage:false}
    }
    if(action.type=="SHOW"){
        return {...state,isImage:true}
    }
    if(action.type=="TOGGLE"){
        return {...state,isImage:!state.isImage}
    }
  
    /*
    switch (action.type) {
        case 'CHANGE':
         return {...state,name:"Akash nagar"}    
        break;

        case 'PLUS':
            return {...state,number:state.number+1}    
        break;

        case 'MINUS':
            return {...state,number:state.number-1}
        break;

        case 'HIDE':
            return {...state,isImage:false}
        break;

        case 'SHOW':
            return {...state,isImage:true}
        break;

        case 'TOGGLE':
            return {...state,isImage:!state.isImage}
        break;
    }
    */
}

    const [objstate, dispatch] = useReducer(reducer, initialState);


  return (
    <div className='container mt-5'>
        <button onClick={()=>dispatch({type:"CHANGE"})}>Change</button>
        <h1>{objstate.name}</h1>
        <hr />

        <button onClick={()=>dispatch({type:"PLUS"})}>+</button>
        <h1>{objstate.number}</h1>
        <button onClick={()=>dispatch({type:"MINUS"})}>-</button>

        <hr />

        <button onClick={()=>dispatch({type:"SHOW"})}>Show</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>Hide</button>
        <button onClick={()=>dispatch({type:"TOGGLE"})}>Toggle</button>
        {objstate.isImage? <ReducerImg/> : null}
    </div>
  )
}

export default UseReducer