import React from 'react';


const Input =(props)=>{


   return(

       <>
           <input className="inpt1" type="text" name={props.children}    value={props.task_name} placeholder="Enter the task" onChange={props.changeValue} required />
                 <button onClick={()=>props.addTaskList()} className="btn1"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
    </>

   )

}


export default Input;
