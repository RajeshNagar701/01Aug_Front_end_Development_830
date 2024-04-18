/*
Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its 
three main phases.

The three phases are: 
Mounting  : birth/load, 
Updating  : changes , 
Unmounting. death/unload

*/
import React, { Component } from 'react'
import Classlife_img from './Classlife_img';

export class Class_lefe extends Component {

    constructor()
    {
        super();
        this.state={
        }
    }

    componentDidUpdate(){
        console.log("Component DidUpdate ");
    }


  render() {
    return (
      <div className='container mt-5'>

            <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
            <h1>{this.state.number}</h1>
            <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>
            <hr />
            <button onClick={()=>this.setState({isImage:false})}>Hide</button>
            <button onClick={()=>this.setState({isImage:true})}>Show</button>
            {this.state.isImage? <Classlife_img/> : null}
      </div>
    )
  }
}

export default Class_lefe