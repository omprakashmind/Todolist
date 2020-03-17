import React from 'react';


const ListComponentTask=(props)=>{
    const {tasks_container,showtask,checkAndUncheckTask,deleteTask}=props;

    return(
           
        tasks_container && tasks_container.map((item, index) => {
            return <div className="bdr1">{item.name}<button className="btn2" onClick={() => showtask(item)}><i className="fa fa-list" aria-hidden="true"></i></button><input type="checkbox" checked={item.status} className="chck1" onClick={() => checkAndUncheckTask(item.name)} /><button className="btn2" onClick={() => deleteTask(index, item.name)}><i className="fa fa-minus-square-o" aria-hidden="true" ></i></button></div>
          
        })  
       
    )
}

export default ListComponentTask;