import React from 'react';


const ListComponentTask=(props)=>{
    const {tasks_container,showtask,checkAndUncheckTask,deleteTask}=props;

    const val=()=>tasks_container && tasks_container.map((item, index) => {
        debugger
        return <div className="bdr1">{item.name}<button className="btn2" onClick={() => showtask(item)}><i className="fa fa-list" aria-hidden="true"></i></button><input type="checkbox" checked={item.status} className="chck1" onClick={() => checkAndUncheckTask(item.name)} /><button className="btn2" onClick={() => deleteTask(index, item.name)}><i className="fa fa-minus-square-o" aria-hidden="true" ></i></button></div>
      
    })  

    return(
           


       <div>{val()}</div> 


       
    )
}

export default ListComponentTask;